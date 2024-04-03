function Average ({courses}) {
  const average = 0

   return (
      <li>{courses.name}: {courses.notes.reduce((acc, current) => acc + current, average) / courses.notes.length}</li>
   )
}

export default Average;