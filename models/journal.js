
module.exports = mongoose => {
  const Journal = mongoose.model(
    "journals",
    mongoose.Schema(
      {
        date: String,
        weather: String,
        feelings: String,
      },
    )
  );

  return Journal;
};
