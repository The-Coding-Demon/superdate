import ScubaDiving from "./ScubaDiving.jpg";

export const FullDescription = () => {
  return (
    <div className="card mb-3 DetailsDescription">
      <div className="row g-0">
        <div className="col-md-6 ">
          <img
            src={ScubaDiving}
            class="img-fluid rounded-start object-fit-md-contain p-4 ScubaIMG"
            alt="Scuba Diving"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title p DetailsTitle">Scuba Diving</h5>
            <p className="card-text pl-3 WrittenDescription">
              Scuba diving is an underwater activity that allows individuals to
              explore the beauty of the underwater world. The term "SCUBA"
              stands for Self-Contained Underwater Breathing Apparatus, which
              refers to the equipment divers use to breathe underwater. It's a
              popular recreational activity, as well as a profession for many
              who work in fields such as marine biology, underwater photography,
              and underwater archaeology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
