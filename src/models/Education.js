import { Model } from "vue-mc";

/**
 * Task model
 */
class Education extends Model {
  // Default attributes that define the "empty" state.
  defaults() {
    return {
      school: "",
      img: "",
      age: ""
    };
  }
}

export default Education;
