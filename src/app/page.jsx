/*

Project Spec:

* routing:
  - https://reactrouter.com/start/data/routing
  - https://hygraph.com/blog/routing-in-react
  - https://fullstackdecal.com/docs/Lessons/Routing

* supabase/databases: 
  - https://supabase.com/docs/guides/database/overview
  - (chat suggested videos https://www.youtube.com/watch?v=tW1HO7i9EIM&t=544s , https://www.youtube.com/watch?v=PBWSqTDcjLM&t=11s)

* slides from today: 
  - https://docs.google.com/presentation/d/1C2i7MPRwLm5ATVC4HNQHyBtUU3bDYacV0vAgUjg3a7o/edit?slide=id.p#slide=id.p
  - interactive: https://sqliteonline.com/

* personal website spec:
  - create components (ex. navbar, cards, etc.) for a personal website! should have pages including home page, contact, experiences, etc.
  - routing with react (connect webpages together with react router)
  - images you use should be in a database (see supabase docs on how to use/ access these images in your code)

  */

/*
Structure:
    General
      - Nav bar linked to home page, contact page and experience page
        - Will also have a resume button on there to dowload my resume

    - Home Page
        - About me

    - Experiences Page
        - Skills
        - Project Specs

    - Contact Page
        - Emails
        - LinkedIn
        - GitHub
        - Reach Out Form: Name, email, message, send

 */


        
"use client";

import dynamic from "next/dynamic";

const Routers = dynamic(() => import("../components/router"), {
  ssr: false,
});


export default function Page() {
  return <Routers />;
}
