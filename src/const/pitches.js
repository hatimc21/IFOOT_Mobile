import axios from "axios";
const getPitches = async () => {
  try {
    const response = await axios.get('http://192.168.137.1:8080/pitches');
    const pitchesl = response.data;
    console.log(pitchesl);
  } catch (error) {
    console.error(error);
  }
  return pitchesl
};
const pitches = getPitches();
export default pitches;