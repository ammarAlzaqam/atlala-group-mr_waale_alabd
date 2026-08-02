function buildNotes(month) {
  const notes = {};

  [...month.sm.slice(2), ...month.lg.slice(2)].forEach((row) => {
    const chaletNum = row[0];

    notes[chaletNum] = row.slice(1);
  });

  return notes;
}

export default buildNotes;
