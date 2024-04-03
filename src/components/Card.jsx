import Average from "./Average";

function Card ({students, increment, decrement}) {
   const {firstname, lastname, house, courses} = students;

   return (
      <section>
         <h2>{firstname} {lastname}</h2>
         <p>{house}</p>
         <ul>
            {courses.map(course => <Average key={course.id} courses={course} />)}
         </ul>
         <button type="button" onClick={increment}>Ajouter 1 point</button>
         <button type="button" onClick={decrement}>Retirer 1 point</button>
      </section>
   )
}

export default Card;