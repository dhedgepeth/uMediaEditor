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

        public UMediaEditorController(IMediaService mediaService, MediaUrlGeneratorCollection mediaUrlGeneratorCollection, MediaFileManager mediaFileManager, IShortStringHelper shortStringHelper, IContentTypeBaseServiceProvider contentTypeBaseServiceProvider)
        {
            _mediaService = mediaService;
            _mediaUrlGeneratorCollection = mediaUrlGeneratorCollection;
            _mediaFileManager = mediaFileManager;
            _shortStringHelper = shortStringHelper;
            _contentTypeBaseServiceProvider = contentTypeBaseServiceProvider;
        }

        [HttpPost]
        public void HandleSave()
        {
            Request.Method = "POST";
            string Body = ""; //holds body of post request
            using (var reader = new StreamReader(Request.Body))
            {
                var postBody = reader.ReadToEnd();
                Body = postBody;
            }

            string[] arr = Body.Split("imageName:"); //split post request body into array [0] holds image data [1] holds image name

            arr[0] = arr[0].Replace("data:image/png;base64,", ""); //remove image header
            arr[0] = arr[0].Replace(" ", "");

            byte[] bytes = Convert.FromBase64String(arr[0]);

            using (MemoryStream stream = new MemoryStream(bytes))
            {
                // Initialize a new image at the root of the media archive
                IMedia media = _mediaService.CreateMedia(arr[1], -1, Constants.Conventions.MediaTypes.Image);
                // Set the property value (Umbraco will handle the underlying magic)
                media.SetValue(_mediaFileManager, _mediaUrlGeneratorCollection, _shortStringHelper, _contentTypeBaseServiceProvider, Constants.Conventions.Media.File, arr[1] + ".png", stream);
                // Save the media
                _mediaService.Save(media);
            }
        }
    }
}
