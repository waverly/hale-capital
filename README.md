# Hale Capitol

This project was built Waverly Mandel in 2018, using `create-react-app` on Node 16.

In 2022, I (Eric Jacobsen) was contracted to do some updates and maintenance.

In 2024, I was contracted for additional maintenance.

## Notes on the code

This site is pretty rudimentary. No typescript, class components instead of functional components, no hooks anywhere.

## Notes on running this project

As part of the second phase of maintenance, I decided to…

- upgrade the important packages (Node 22, React 18, etc.)
- switch from `yarn` to `pnpm`
- switch from `react-scripts` to `vite`

`react-router-dom` is out of date, and would require a bigger lift to replace than I have time for right now.

There is no deployment pipeline. The site is built using `pn run build`, and uploaded via SFTP.

## Notes on Prismic

The `prismic-javascript` lib is pretty seriously out of date at this point, but replacing it is a big lift, as I'll explain.

Content for this site is pulled using `prismic.api(endpoint)` _in the client_. If you think that’s a little nuts… you’re not alone.

A better long-term solution would be to port this whole thing to NextJS and render the whole thing as a static build. IMO, the design of this site doesn't justify such a transition — I’d suggest just rebuilding the whole thing from scratch.

## notes

protected doc:
https://docs.google.com/document/d/1i7iZ9Em-gj8bIcXAGeUNWq-qd1PHftm26oeiQvupCVM/edit?tab=t.0

changes…

- X Federal Markets
- X Commercial Technology
- Values page
- add “Resources” page
  "Since you can control access via Google’s built-in sharing protections,
  and it would be a moderate lift to add logins to this site,
  I think it would be best to leave protected access out of this scope.""
