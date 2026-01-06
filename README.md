# Ftweb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## TODO
- The api URL to ftdata is hardcoded in apiservice and also still uses regular http...
- Make focus should be on the navigation page/placeholder app.html and then add some styling for overview.css
- Make a home page, so /overview isn't the default page that opens
- search bar to quickly locate the right politician is a must
- I suppose we need some data clean up so these admins and test entries don't appear. Do they have all the same relations with other tables as the actual politicians do?
- It should also be possible to search for party and then only show party members. We need to retrieve the bio and retrieve party with regex I think. Doesn't seem like there's any other table that contains that information.
- Not sure if the Person interface should be located elsewhere than Overview now that the Politician component also uses it. Maybe it should be moved to Apiservice so we can get rid of Observable<any> type.
- what happens if the politician id is not a valid one? we should display something like a notification
- Add virtual scrolling for better performance
- It should show just whether it was passed or rejected, then the conclusion summary could show if you hover over it.
- fix css for politician.html
- Look into deferred views for the politician vote list, maybe a small loading message would be nice.
