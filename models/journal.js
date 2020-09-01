
module.exports = mongoose => {
  const Journal = mongoose.model(
    "journal",
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
