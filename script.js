function getFormvalue() {
    document.getElementById("form1").addEventListener("submit", function(e){
		e.preventDefault();
	})

	const form =  document.getElementById("form1");

	const fName = form.fname.value;
	const lName = form.lname.value;

	alert(fName + " " + lName);

}
