
var student = {
					login_credentials: {
						
						username: "niranjan",
						password:"pass"
					},
					
					profile: {
						personal_information: {
							first_name:"",
							middle_name:"",
							last_name:"",
							gender:"",
							dob:"",
							ssn_no:"",
						},
						address: {
							country:"",
							adress1:"",
							adress2:"",
							adress3:"",
							city:"",
							state:"",
							zip_code:""
						},
						contact_details: {
							email:"",
							phone_no:"",
							skype_id:""
							
						},
						geography: {
							country_of_birth:"",
							city_of_birth:"",
							citizenship:""
						},

						disciplinary_history: {
							disciplinary_history:""
						},
						criminal_history: {
							criminal_history:""
						}
					},
					
					family: {
						household:{
							which_parent_do_you_live_with:"",
							martial_status:"",
							do_you_have_children:""
							
						},
						parent1: {
							type:"",
							living:"",
							first_name:"",
							middle_name:"",
							last_name:"",
							email:"",
							phone:"",
							address:"",
							occupation:"",
							employment_status:"",
							name_of_employer:"",
							education_level:""
						},
						
						parent2: {
							type:"",
							living:"",
							first_name:"",
							middle_name:"",
							last_name:"",
							email:"",
							phone:"",
							address:"",
							occupation:"",
							employment_status:"",
							name_of_employer:"",
							education_level:""
						}
					},
					education: {
						school: {
							no_of_schools: "",
							school_name: "",
							date_of_graduation:"",
							counsellor_first_name:"",
							counsellor_middle_name:"",
							counsellor_last_name:"",
							counsellor_phone:"",
							counsellor_email:""
						},
						education_interruption:{
							education_interruption:""
						},
						collage_university: {
							no_of_collage_or_university_level_courses_taken:""
						},
						grades: {
							class_ranking:"",
							grad_class_size:"",
							cumulative_GPA:"",
							GPA_scale:""
							
						}
					},
					tests: {
						test: {
							test_name: "",
							highest_critical_reading_score:2,
							highest_math_score:3,
							highest_writing_score:4
						}
					}
				  }
function createInput(ele,type,clsname,id,required){
	var div = document.createElement("div");
	var field = document.createElement("input");
	field.type = type;
	field.className = clsname;
	field.id = id;
	field.required=required;
	div.appendChild(field);
	document.getElementById(ele).appendChild(div);
}
function createLabel(ele,id,value){
	/* var div = document.createElement("div");
	var label = document.createElement("label");
	label.for=id;
	label.name = value
	div.appendChild(label);
	document.getElementById(ele).appendChild(div); */
	var wrapper = $("."+ele);
	$(wrapper).append( '<br/><div> <label for='+id+'>'+value+'</label>');
}
function createHiddenfield(ele,id) {
	var field = document.createElement("p");
	field.id = id;
	field.className = "error";
	field.hidden = true;
	document.getElementById(ele).appendChild(field);
}
function showMsg(id,msg) {
	$(id).show()
	$(id).html(msg);
}
$(document).ready(function() {
    var wrapper         = $(".AccReg-form"); //Fields wrapper
    
    var x = 1; //initlal text box count
		$(wrapper).append("<ul>")
			 createLabel("AccReg-form", "email", "Email Address");
			 createHiddenfield("Register0","email_error")
			 createInput("Register0", "email", "defaultTextInput input", "email",true);
			 
			 
			 createLabel("AccReg-form", "re_email", "Re-type Email Address");
			 createHiddenfield("Register0","re_email_error")
			 createInput("Register0", "email", "defaultTextInput input", "re_email",true);
			 
			 
			 createLabel("AccReg-form", "pass", "Password");
			 createHiddenfield("Register0","pass_error")
			 createInput("Register0", "password", "defaultTextInput input", "pass",true);
			 
			 createLabel("AccReg-form", "re_pass", "Re-type Password");
			 createHiddenfield("Register0","re_pass_error")
			 createInput("Register0", "password", "defaultTextInput input", "re_pass",true);
			 
			 showMsg("email_error","Enter valid email id");

    $(wrapper).append("</ul>");
	 $("#email").focusout(function(){
		 validateField("#email", "email")
 });
 $("#re_email").focusout(function(){
		 validateField("#re_email", "email")
 });
 $("#pass").focusout(function(){
		 validateField("#pass", "password")
 });
 $("#re_pass").focusout(function(){
		 validateField("#re_pass", "password")
 });
});
 $('form#loginForm').submit(function() {
	 console.log("submit");
	 $("form#loginForm :input").each(function(){
		var input = $(this);
		var value = input.val();
		var id = input.attr("id");
		
	 });
 });
function validateField(id,type) {
	var value = $(id).val();
	id = id+"_error";
	if(value=="")
		showMsg(id,"Please complete this required question.");
	else {
	switch (type) {
		case "email":
			console.log(value[value.length - 1]);
			if(value.indexOf("@") == -1)
				showMsg(id, "Email must include one @.")
			else if(value.indexOf("@.") != -1 || value.indexOf(".@") != -1 || value[value.length - 1] == ".")
				showMsg(id,"Email before and after @ cannot start or end with a dot.")
			else if(value[value.length - 1] == "@")
				showMsg(id, "invalid email id.")
			else
				$(id).hide();
			break;

		
	}
	}
}
console.log(student.login_credentials.username)