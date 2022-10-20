pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name
;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});