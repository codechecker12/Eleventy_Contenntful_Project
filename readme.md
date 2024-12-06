
# Assignment 2 - Eleventy Contentful Project

This project is a web application using Eleventy (11ty) for static site generation and Contentful as the headless CMS. It fetches data from Contentful to display content on various pages like home, blog, about, labs, and lab02, with added pagination functionality for the blog page.

## Prerequisites

Before you begin, ensure the following are installed on your system:

- **Node.js**: This is needed to install project dependencies.
- **Eleventy (11ty)**: A static site generator we’ll use to build and serve the project.

## How to Run This Project

Follow these steps to get the project running on your local machine:

### 1. Unzip the Folder

After downloading the zip folder, unzip it and navigate to that directory on your computer.

### 2. Install Required Dependencies

Open your terminal, go into the project folder, and run the following command:

```bash
npm install
```

### 3. Set Up Environment Variables

Created a `.env` file in the root of my project and i will add the Contentful space ID and access token while demo:

```plaintext
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

### 4. Run Eleventy (11ty)

Start the project by running:

```bash
npx @11ty/eleventy --serve
```

This will start a local development server, and you’ll be able to access the project by visiting:

[http://localhost:8080](http://localhost:8080)

## Browse the Pages

- **Home Page**: Access it at [http://localhost:8080](http://localhost:8080). This page introduces the site.
- **Blog Page**: Located at [http://localhost:8080/blog](http://localhost:8080/blog/page/0). It fetches and displays blog posts from Contentful, including descriptions of various countries and includes pagination.
- **About Page**: Available at [http://localhost:8080/about](http://localhost:8080/about/page/0). This page fetches data from Contentful about myself and elaborates on my skills.
- **Labs Page**: Found at [http://localhost:8080/labs](http://localhost:8080/labs). It fetches and displays the deliverable of Lab01 from Contentful.
- **Lab02 Page**: Located at [http://localhost:8080/lab02](http://localhost:8080/lab02). This page fetches and displays the deliverable of Lab02 from Contentful.
