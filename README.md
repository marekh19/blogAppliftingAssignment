# Applifting Blog Engine Assignment

A project done as a task for frontend developer application at Applifting company. The full assignment can be found here: [Assignment](https://github.com/Applifting/fullstack-exercise/blob/master/assignment.md#frontend-developer-exercise)

## Table of contents

- [Applifting Blog Engine Assignment](#applifting-blog-engine-assignment)
  - [Table of contents](#table-of-contents)
    - [Built With](#built-with)
    - [Why these technologies?](#why-these-technologies)
    - [Prerequisites](#prerequisites)
    - [Environment variables](#environment-variables)
      - [What to put there?](#what-to-put-there)
    - [Installation](#installation)
  - [State of completion](#state-of-completion)
    - [User Perspective](#user-perspective)
      - [Article list:](#article-list)
      - [Article View](#article-view)
      - [New Article View](#new-article-view)
      - [General](#general)
    - [Admin Perspective](#admin-perspective)
      - [Login Screen](#login-screen)
      - [My Articles List](#my-articles-list)
      - [Article Edit View](#article-edit-view)

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [react-markdown](https://github.com/remarkjs/react-markdown)

### Why these technologies?

- **Next.js**: I'm already very familiar with this framework and since this blog platform has mostly static content that does not change too often I wanted to leverage usage of [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components) where it was possible. SSR/SSG combination also seems much better to me than using only CSR for blog content

- **Tailwind CSS**: I'm faster when styling with Tailwind in comparison to CSS-in-JS library like styled components

- **NextAuth.js**: Even though it was probably overkill for this kind of project (since the backend does not return standard JWT token but only access token), I wanted to try it out and also take leverage of middleware with protecting `/admin/*` routes for non-logged in users

- **react-markdown**: It was simple to use and took care of all markdown content rendering needs

### Prerequisites

- [Node.js](https://nodejs.org/)

### Environment variables

> Assuming you have already cloned this repository

Setup environment variables:

```
cp .env.example .env.local
```

#### What to put there?

- **NEXT_PUBLIC_API_KEY** =
- **NEXT_PUBLIC_BACKEND_BASE_URL**
- **NEXTAUTH_URL** = `http://localhost:3000` when running locally, your deployment URL when deployed to production
- **NEXTAUTH_SECRET** = can be random string, needed only for production

### Installation

When you have all prerequisites ready, you can install and start the application following these steps:

1. Install all dependencies:

```
npm install
```

or

```
yarn
```

2. Run dev server:

```
npm run dev
```

or

```
yarn dev
```

## State of completion

Unfortunately I wasn't able to finish everything due to very tight work schedule. I had the most time during the weekend so what caused some difficulties I skipped and eventually got back to it.

It's a pitty that I did not implement **Featured Image** feature for articles. I was quite confused at the beginning that `GET /images/{imageId}` returns the image itself and not a link to it's hosted URL. I did some research on that later and found out about concept of **"Blobs"**. So now I know how I could implemented, just wasn't able to do it in time.

Except that I did not implement responsive design even though it's something I'm very familiar with. From the beginning I knew the schedule will be very tight and felt like it would too much time at the expense of other features.

You can find below which points of this assignment I was able to implement and which not or only partially, including my comments.

### User Perspective

#### Article list:

- [x] display a list of all articles, ordered by date descending
- [x] each article should show title, perex and publication date
- [x] each article should have a link to the full text

#### Article View

- [x] display an article
- [x] article should be in markdown, take care of proper rendering

#### New Article View

- [x] display a page with form to add new article
- [x] the form should take title, perex and content
- [x] the content should be in markdown, you can use some existing markdown editor
  > Instead of full markdown editor I used toggle between editing raw markdown and previewing the content in a formatted manner
- [x] add necessary validations
- [x] this page should be protected by password

#### General

- [ ] Add Comment functionality
  > only the UI part, unfortunately every try I did from my app or Postman returned 500 for POST /comments
- [x] display comments on Article View page
  > It's implemented, but since I wasn't able to create a comment, I commented out the comments passed as props and used mock comments instead to show the implementation of the UI. It's commented out in this file in case you want to try it with your own data: **components/Articles/Full/index.tsx**
- [x] each comment should have content, timestamp and author
- [ ] add comment form to Article View page
  > it's partially implemented, but it always returned 500 for me, so the logic to rerender after adding comment is not implemented
- [ ] comment form should take author and content
  > takes only content
- [ ] Add Comment voting functionality
  - add the ability to vote on comments (+/-)
  - display score on each comment
    > Only the UI, voting is mocked with alert()

### Admin Perspective

#### Login Screen

- [x] implement login
- [x] after successful login redirect to next screen
- [x] on unsuccesful login display error message

#### My Articles List

- [x] display table of all articles
- [x] display a button to create new article
- [x] implement edit and delete buttons
- [ ] optionally implement article ordering

#### Article Edit View

- [x] display editable sections of article
- [x] implement publish button
- [x] use some existing Markdown editor, unless you really want to implement your own
  > Same as for Create Article - not full markdown editor - used kind of workaround to toggle between raw markdown and previewing the content in a formatted manner
