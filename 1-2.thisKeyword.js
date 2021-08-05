var obj = {
  name:  "Parmesan the Great",
  getName: function() {
    console.log(this.name);
  }
}

obj.getName();