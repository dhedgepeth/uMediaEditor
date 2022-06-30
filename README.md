<!-- PROJECT LOGO -->
<div align="center">
    <a href="https://github.com/dhedgepeth/uMediaEditor">
    <img src="App_Plugins/uMediaEditor/assets/images/uME-icon.png" alt="Logo" width="90" height="90">
  </a>
  <h3 align="center">uMediaEditor</h3>

  <p align="center">
    Expand the Umbraco Media tab with edits!
    <br />
    <a href="https://github.com/dhedgepeth/uMediaEditor"><strong>Explore the docs</strong></a>
    <br />
    <br />
    <a href="https://github.com/dhedgepeth/uMediaEditor/issues">Report Bug</a>
    •
    <a href="https://github.com/dhedgepeth/uMediaEditor/issues">Request Feature</a>
  </p>
</div>

## About the Project
The uMediaEditor package aims to add basic image processing directly to the Umbraco backoffice!

Wanting to get more familiar with development, as well as wanting to become part of the Umbraco Community, we set out to expand the capabilites of the Umbraco backoffice Media tab by implementing some basic editing features.

We noticed a few areas where the Media tab could be expaned:
* Download button to bring photos from the backoffice to a local machine :arrow_down_small:
* Sliders to adjust photos in the backoffice simliar to the features you can find on a smart phone :pencil2:
* Save button which allows you to save changes made on an image from the backoffice, as a new image in the backoffice or overwritting the original image :floppy_disk: (Coming soon)

Of course we still want to bring more functonality as we expand this package so every bit of feedback is appriciated! :grin:

### Built With

* [Angular](https://angular.io/)
* [JQuery](https://jquery.com)

## Getting Started

The uMediaEditor package was developed for Umbraco v9+. We cannot guarantee that the package will work as intended for versions 8 and below.

### Umbraco cloud 

When installing this package with Umbraco Cloud, clone your project down locally and then follow instructions as normal.

### Installation

In the Nuget Package manager console, run the following:

```sh
  Install-Package uMediaEditor -Version 1.0.0-beta
  ```

## Usage

After navigating into the Umbraco backoffice, make your way to the media tab, here you will find a new tab on the dashboard.
    ![Example](App_Plugins/uMediaEditor/assets/images/Tutorial_1.png)
Once you enter the uME Dashboard, use the drop down of the tree view to select your photo, draging it onto the editor area.
    ![Click](App_Plugins/uMediaEditor/assets/images/Tutorial_2.png)
    ![and drag](App_Plugins/uMediaEditor/assets/images/Tutorial_3.png)

:star2: From here you're able to make edits to your image using the drop down menus on the right hand side, and save your image using the buttons under the image :star2:
    ![](App_Plugins/uMediaEditor/assets/images/Tutorial_4.png)

## Roadmap

- [x] Add Downloads
- [ ] Add Save to the backoffice
- [ ] Add Sharpness slider
- [ ] Add Temperature slider

See the [open issues](https://github.com/dhedgepeth/uMediaEditor/issues) for a full list of proposed features (and known issues).

## Credits

Davis Hedgepeth | https://github.com/dhedgepeth

Nix Chaves-Solorzano | https://github.com/Nixdot

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## How to Contribute

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/UmbazingFeature`)
3. Commit your Changes (`git commit -m 'Add some UmbazingFeature'`)
4. Push to the Branch (`git push origin feature/UmbazingFeature`)
5. Open a Pull Request


## Acknowledgments

* [animate-css](https://github.com/animate-css/animate.css)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>
