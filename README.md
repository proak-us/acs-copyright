# Getting Started


## What is Dynamic SDK ?

## Starting project

In order to run this application you must have at least Node version 16.16.0.

-   [Node JS](https://nodejs.dev/download/)

To manage Node versions in your machine, we recommend installation of Node Version Manager.

-   [NVM on UBUNTU and MACOS](https://github.com/nvm-sh/nvm)

-   [NVM on WINDOWS](https://github.com/coreybutler/nvm-windows)

In addition, I recommend the installation of Visual Studio Code.

Package Installer

To execute this application you must have installed the package manager `npm` or `yarn`.

-   [NPM](https://www.npmjs.com/get-npm) version 8.11.0
-   [YARN](https://classic.yarnpkg.com/en/docs/install/#windows-stable) version 1.22.19

But for better compatibility and to keep the already existing execution, I recommend using `yarn`

How to run this application

-   Install recommended Node version `16.16.0`:

```
    nvm install 16.16.0
```

-   Choose and select the Node version `16.16.0`:

```
    nvm use 16.16.0
```
-   Inside the project's root folder:
-   Install all the packages with `npm` ou `yarn`:

```
    npm install
    yarn install
```

-   Run the application on development mode:

```
    npm run dev
    yarn dev
```

-   Build a production version with webpack on `build` folder:

```
    npm run build
    yarn build
```

The `dist` folder, includes all the files generated to run this application.

Basics
Project Structure
Our project is a built-in template to a quick start. All the ecosystem is based on Astro CLI a
Project Tree
```
├── src/
│   ├── components/
│   ├── layouts/
│   │   ├── layout.astro/
│   │   ├── nft-back.astro/
│   │   ├── nft-front.astro/
│   └── package/
│   │   ├── ticket-sdk/
│   └── pages/
├── public/
│   ├── favicon.svg
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

# NFT as a template
To start the implementation, we need to understand the project structure. The beginning and the end result of all this implementation is in the file `src/pages/index.astro` and in this file it contains all the assembly structure and controls of our NFT.

Inside it we can see that we have two controls where we can decide the width and height of the presentation container and the NFT itself. The `containerSize` influences the viewing area available for NFT rendering (movement).

The `ticketSize` influences the total area available for us to insert our assets so that all the content is inside the presentation area and the container

This project contains some basic controls for moving, zooming and rotating and to use each one respectively:
- Movement: Left mouse button clicking on the NFT and drag along in any direction;
- Zoom: Middle mouse button, turning up will zoom out and down will zoom in;
- Rotation: With the middle mouse button and holding shift button, up will rotate clockwise and down will rotate counterclockwise.

## Types of assets
Within the composition of our NFT, we have an important component to be used for a better presentation and control of our assets. He is responsible for ensuring that each element is in the correct position when you use the basic movements. Using the `<NftContentPosition positionX={positionX} positionY={positionY}> <any asset you want> </NftContentPosition>` component it will do the work for you to position the elements inside the NFT template

Within each asset type and for better visualization and control, we will use a component that is present within the NFT composition structure: `NftContentPosition`.

To use it is very simple: insert any type of asset you want to implement and informing the position you want it to be presented.

### Text assets
The text asset is the simplest to insert, so we'll use the structure component with the following structure: `<NftContentPosition positionX={0} positionY={0}>Text Example</NftContentPosition>`. With the insertion of this element we can already check the text depending on the face that was inserted

### Image assets
The image asset, we will use the structure component with the following structure:

```
<NftContentPosition positionX={0} positionY={0}>
    <img src="<url to resource>" />
</NftContentPosition>
```

With the insertion of this element we can already check the image on the face that was inserted

### Video assets
The video asset, we will use the structure component with the following structure:

```
<NftContentPosition positionX={0} positionY={0}>
    <video width="<content width>" height="<content height>">
        <source src="<url to resource>" type="video/mp4">
    </video>
</NftContentPosition>
```

With the insertion of this element we can already check the video on the face that was inserted

# Examples
## Base template
The base template is the starting point for you to build your NFT. It contains everything assembled for you to start your creation quickly. The entire environment is configured to manually receive changes to the base NFT, which currently contains an image and some purely reference texts on how the position system will work to compose the elements.

Accessing the folder `src/layouts/nft-front.astro` or `src/layouts/nft-back.astro` you will find the NFT faces to start assembling the elements. Both have the same file structure and operation and there will be your blank screen for you to implement everything your way

## Mutable States

## Copyright

## Generative Art

## Random

# Community
Community Discord: https://discord.gg/JY6g4gSCm4
Stackoverflow:https://stackoverflow.com/questions/tagged/dynamic-sdk
Contact Us: mailto:support@proak.io
Licensing
ProAK is licensed under the MIT License.

All files located in the node_modules and external directories are externally maintained libraries used by this software which have their own licenses; we recommend you read them, as their terms may differ from the terms in the MIT License.
