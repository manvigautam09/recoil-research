import React, { Suspense } from "react";

import Card from "../Card";

const Details = () => {
  return (
    <Suspense fallback={<h3>Loading Details...</h3>}>
      <Card />
    </Suspense>
  );
};

export default Details;
