# Jarrod Watts - Domain hCard Builder

Live Deployment:
https://h-card-jarrodwatts.vercel.app/

Screenshot:
![Screenshot](preview.png)

## Installation

To install and run this code:

- `git clone https://github.com/jarrodwatts/hCard.git`
- `cd .\hCard\`
- `npm install` _(dependency vulnerabilities come from create-react-app)_
- `npm run start`
- Go to [http://localhost:3000](http://localhost:3000)

## Testing

Run `npm run test` to run the test suite for this project.

---

### What I'd Do With More Time

If I were to spend more time on the project I would focus more on the accessibility elements of the project using `aria` attributes and things of that nature.

I'd also add form validation as the user types, so I'd probably be looking at using a library such as [React Hook Forms](https://react-hook-form.com/get-started) to achieve that. This library is great for adding regex rules for the inputs and displaying error messages depending on user input.

I'd also like to add some E2E tests using [Cypress](https://www.cypress.io/), but I think my tests using Jest and React Testing Library in this case cover most of the functionality of the application.
