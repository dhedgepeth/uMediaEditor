using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Web.Common.Attributes;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Extensions;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Events;

namespace UMediaEditor.Controllers
{
    [PluginController("uMediaEditor")]
    public class UMediaEditorController : UmbracoApiController
    {
        private IMediaService _mediaService;
        private MediaFileManager _mediaFileManager;
        IShortStringHelper _shortStringHelper;
        IContentTypeBaseServiceProvider _contentTypeBaseServiceProvider;
        MediaUrlGeneratorCollection _mediaUrlGeneratorCollection;

        public UMediaEditorController(
            IMediaService mediaService,
            MediaUrlGeneratorCollection mediaUrlGeneratorCollection,
            MediaFileManager mediaFileManager,
            IShortStringHelper shortStringHelper,
            IContentTypeBaseServiceProvider contentTypeBaseServiceProvider
            )
        {
            _mediaService = mediaService;
            _mediaUrlGeneratorCollection = mediaUrlGeneratorCollection;
            _mediaFileManager = mediaFileManager;
            _shortStringHelper = shortStringHelper;
            _contentTypeBaseServiceProvider = contentTypeBaseServiceProvider;
        }

        [HttpPost]
        public void HandleSave(string Picture, string Name, bool OverWriteImg, int ImageId)
        {
            Request.Method = "POST";
            Picture = Picture.Replace("data:image/png;base64,", ""); //remove image header
            Picture = Picture.Replace(" ", "");

            Console.WriteLine("Image ID: " + ImageId);

            byte[] bytes = Convert.FromBase64String(Picture);

            using (MemoryStream stream = new MemoryStream(bytes))
            {
                IMedia media;
                if (OverWriteImg)
                {
                    media = _mediaService.GetById(ImageId);
                }
                else
                {
                    // Initialize a new image at the root of the media archive
                    media = _mediaService.CreateMedia(Name + "-edit", -1, Constants.Conventions.MediaTypes.Image);
                }
                // Set the property value (Umbraco will handle the underlying magic)
                media.SetValue(_mediaFileManager, _mediaUrlGeneratorCollection,
                 _shortStringHelper, _contentTypeBaseServiceProvider, Constants.Conventions.Media.File, Name + "-edit.png", stream);
                // Save the media
                _mediaService.Save(media);
            }
        }

    }
    public class MediaNotificationHandler : INotificationHandler<MediaSavedNotification>
    {
        public void Handle(MediaSavedNotification notification)
        {
            foreach (var mediaItem in notification.SavedEntities)
            {
                if (mediaItem.ContentType.Alias.Equals("Image"))
                {
                    notification.Messages.Add(new EventMessage("UMediaEditor", " - Image Saved", EventMessageType.Success));
                }
            }
        }
    }
}