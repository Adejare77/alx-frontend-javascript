export default function getNeighborhoodsList() {
  this.sanFrancisoNeighborhoods = ['SOMA', 'Union Squre'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFrancisoNeighborhoods.push(newNeighborhood);
    return self.sanFrancisoNeighborhoods;
  };
}
