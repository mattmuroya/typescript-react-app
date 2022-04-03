import { CoursePart } from '../types';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ part }: { part: CoursePart }) => {
  let component = <div></div>
  switch (part.type) {
    case 'normal':
      component = (
        <div>
          <h3>{part.name} (Exercises: {part.exerciseCount})</h3>
          <p>{part.description}</p>
        </div>
      );
      break;
    case 'groupProject':
      component = (
        <div>
          <h3>{part.name} (Exercises: {part.exerciseCount})</h3>
          <p>Group Project Count: {part.groupProjectCount}</p>
        </div>
      );
      break;
    case 'submission':
      component = (
        <div>
          <h3>{part.name} (Exercises: {part.exerciseCount})</h3>
          <p>{part.description}</p>
          <p>Submit to: {part.exerciseSubmissionLink}</p>
        </div>
      );
      break;
      case 'special':
        component = (
          <div>
            <h3>{part.name} (Exercises: {part.exerciseCount})</h3>
            <p>{part.description}</p>
            <p>Submit to: {part.requirements.join(', ')}</p>
          </div>
        );
        break;
    default:
      assertNever(part);
      component = <div></div>
      break;
  }

  return component;
};

export default Part;
