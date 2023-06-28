export const FavouritesCard = (favourites) => {
  const favouritesFindings = favourites.favourites;
  return (
    <div>
      <div className="text-white FavouritesBox">
        <div class="p-3">
          <img src={favouritesFindings.image} className="MainIMGResult"></img>
        </div>
        <div class="p-3">
          <h2>{favouritesFindings.title}</h2>
          <p className="Detailedtext">{favouritesFindings.description}</p>
        </div>
      </div>
    </div>
  );
};
