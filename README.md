# Notes

This is a 2 hours test, so all you can see is done in 2 hours.

## With more hours

- Find the configuration bug using Jest (I followed this doc: https://nextjs.org/docs/testing) and add unit tests. Example in home page I'd like to add a mock api call, check the render with 0 elements, 1 and X elements and check if the dynamic text is rendered correctly.
- Prettier already run on my VSCode, I added a simple file .prettierc.json to avoid conflicts with different configurations.
- Add ESLint, eslint probably can cause conflicts with prettier, so following this documentation could save this problem: https://javascript.plainenglish.io/setting-eslint-and-prettier-on-a-react-typescript-project-2021-22993565edf9
- Github CI, during push and pull request to some branches "ex: production, staging and development" I'd like to create lint checks, run tests, auto build and deploy, a good guide found to build it is here: https://sviat-kuzhelev.medium.com/progressive-front-end-ci-on-github-actions-817a29938e4f
- Fix (expectedts-styled-plugin(9999)) lint "error" inside styled components.
- Create style standards and styled components at least for buttons and text or add a style library.

## Run the app

```bash
cd rick-and-morty

npm i

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# FullStack Mid Test

### The Challenge

The challenge is split into two parts. Depending on where your strengths lie feel free to tackle 1 or both of the tasks.

We use NextJS, both the BE and FE tasks can be accomplished in the same application boilerplate. Therefore, we have leveraged API routes for the BE task and the standard pages structure for the FE task.

#### BE Task

Create a custom rest API to pre-filter all required data needed. The required data includes getting all Alive, Morty characters along with all of their associated data types Origin, Location and Episode data from the Rick and Mort API. https://rickandmortyapi.com/. Please ensure you read the docs thoroughly https://rickandmortyapi.com/documentation.

The interfaces in the codebase will show you what the data structure **must** look like, if you need to extend them, feel free! However, the original structure must stay unchanged.

#### FE Task

Build a simple UI to list all characters using the mockdata provided and using the basic wireframes provided. There is mockdata for the character listing page and for the individual character page. The pages themselves have been added.

##### Please ensure your work checks all the points below – it’s what we will be looking out for

- Your chosen method for fetching and aggregating data. (BE only)
- Chosen folder structure
- The layout should be based on the wireframes provided.
- Final work (whether complete or part complete) should be submitted in a git repository. (ideally we would like to see a commit history of some sort). With a README.md file, so we can run the app locally and test it ourselves.
- For the BE task **DO NOT use the Rick and Morty JavaScript library**. We want to see how you architect aggregating data.
- The site should be built using HTML, CSS and JavaScript (TypeScript), and as far as styling is concerned: SCSS, Post CSS, CSS Modules, and CSS-in-JS are all encouraged.
- The FE task should be built using responsive techniques.

### Taking things further:

(Not a requirement but if you think it will help us assess your skill level and passion). If you have the time, here are some suggestions to enhance the app:

- Add eslint and a config
- Add prettier and a config
- Unit tests
- Use path aliases for TS
- Introduce a build pipeline using Github CI / Circle CI or other CI tools.
- Responsive images (FE task)
- Performance optimisation (add a cache layer) - BE Task
