# Documentation

## Decisions

### TailwindCSS

I chose to use TailwindCSS because one of the things I don't like about Angular is how a component is spread out across 3 files. Using Tailwind removes one of these. I also like the utility-first approach to styling.

### Eslint & Prettier

I like consistency in coding style and these tools help with that. These are currently the most popular tools for this purpose. I have also included the TailwindCss Eslint plugin to keep the Tailwind classes consistently in the same order.

### Ngrx Component Store

One of the challenges I usually face with Angular is the scattered state updates. I chose to use Ngrx Component Store because it helps to keep the state updates in one place and provides a structured way to handle state and side effects.

### ClientFormComponent

Creating and updating entities usually happens with more or less the same form. I created a generic form component that can be used for both creating and updating entities. This component is currently only used for updating as the API does not support creating entities. (Also time limitations)

The only downside to this approach is that in order to handle both creating and updating Clients, there is a lot of nullish coalescing in the code. This might harm readability. I found the benefits to outweigh this downside of having a generic form component.
