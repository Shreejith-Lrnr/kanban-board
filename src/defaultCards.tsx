import { CardType } from './types';

export const DEFAULT_CARDS: CardType[] = [
  //backlog
  {
    title:"Create a new project",
    id: "1",
    column: "backlog",
  },
  {
    title:"Plan the project with the team",
    id: '2',
    column: "backlog",
  },
  {
    title:"Meet with the client to discuss the project requirements",
    id: '3',
    column: "backlog",
  },
  {
    title:"Update the project timeline and budget",
    id: '4',
    column: "backlog",
  },

//todo
  {
    title:"Look for a new office space",
    id: '5',
    column: "todo"
  },
  {
    title:"Hire a new team member",
    id: '6',
    column: "todo"
  },

  //doing
  {
    title:"Visit the new office space",
    id: '7',
    column: "doing"
  },
  {
    title:"Interview potential candidates",
    id: '8',
    column: "doing"
  },
  {
    title:"Kick off the project",
    id: '9',
    column: "doing"
  },

  //done
  {
    title:"Sign the lease for the new office",
    id: '10',
    column: "done"
  },
  {
    title:"Hire the new team member",
    id: '11',
    column: "done"
  },
  {
    title:"Start the project",
    id: '12',
    column: "done"
  }
]