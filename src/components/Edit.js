import React, { Component } from 'react';
class Edit extends Component {
  render() {
    return (
      <div className="Edit">
              <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
          <label for="icon_prefix2">First Name</label>
        </div>
      </div>
    </form>
  </div>
   
      </div>
    )
  }
}
export default Edit;