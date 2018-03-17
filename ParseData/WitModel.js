var DATAHELP = require('../HelpClasses/ParseTime');
var BULDREQUESTDB = require('../BuildRequest/BuildDBRequest')
/*
public $leson; 
public $group; 
public $laboratory; 
public $faculty; 
public $auditory; 
public $deanery; 
public $corps; 
public $dormitory; 
public $pulpit; 

public $teacher; 
public $dean; 
public $secretary; 
public $mainUserPulpit;
*/
    function witModel(data) {
        dateHelp = new DATAHELP();
        console.log("start wit model");
        console.log(JSON.stringify(data));
        // this.msg_id =  data['msg_id']   
        for (var key in data) {
            for(var k in data[key]){
                if(key == 'dataOfMounth')
                    this.dataOfMounth = (data[key][k]["value"]);

                if(key == 'numberGroup')
                    this.numberGroup = data[key][k]["value"];
                
                if(key == 'numberAuditory')
                    this.numberAuditory = data[key][k]["value"];
                
                if(key == 'time')
                    this.time = data[key][k]["value"];
                
                if(key == 'nameObject')
                    this.nameObject = (data[key][k]["value"]);
                
                if(key == 'day')
                    this.day = setDataInterval(data[key][k]["value"]);
                
                if(key == 'nameTeacher')
                    this.nameTeacher = data[key][k]["value"];
                
                if(key == 'object')
                    this.setObject(data[key][k]["value"]);
                
                if(key == 'query'){
                    this.query = data[key][k]["value"];               
                }

                if(key == 'person')
                    this.setPerson(data[key][k]["value"]);            
            }
        }
        console.log(JSON.stringify(this));
    }

    witModel.prototype.setPerson = function(person){
        switch (person) {
            case 'teacher':
                this.teacher = person;
                break;
            case 'dean':
                this.dean = person;
                break;
            case 'secretary':
                this.secretary = person;
                break;
            case 'mainUserPulpit':
                this.mainUserPulpit = person;
                break;
            default:
                break;
        }
                
    }

    witModel.prototype.setObject = function(object){
        console.log(">>>" + object);
            switch (object) {
                case 'leson':
                    this.leson = object;
                    break;
                case 'group':
                    this.group = object;
                    break;
                case 'laboratory':
                    this.laboratory = object;
                    break;
                case 'faculty':
                    this.faculty = object;
                    break;
                case 'auditory':
                    this.auditory = object;
                    break;
                case 'deanery':
                    this.deanery = object;
                    break;
                case 'corps':
                    this.corps = object;
                    break;
                case 'dormitory':
                    this.dormitory = object;
                    break;
                case 'pulpit':
                    this.pulpit = object;
                    break;
                default:
                    break;
            }
    }

    witModel.prototype.getMsgId = function() {
      return this.msg_id;
    };

    witModel.prototype.getDataOfMounth = function() {
        return this.dataOfMounth;
      };
      
    witModel.prototype.getNumberGroup = function() {
      return this.numberGroup;
    };

    witModel.prototype.getNumberAuditory = function() {
      return this.numberAuditory;
    };

    witModel.prototype.getTime = function() {
      return this.time;
    };

    witModel.prototype.getNameObject = function() {
      return this.nameObject;
    };

    witModel.prototype.getDay = function() {
      return this.day;
    };

    witModel.prototype.getNameTeacher = function() {
      return this.nameTeacher;
    };


    witModel.prototype.getObject = function() {
      return this.object;
    };

    witModel.prototype.getQuery = function() {
      return BULDREQUESTDB.getBuildDBRequest(this.query, this);
    };

    witModel.prototype.getPerson = function() {
        return this.person;
    };


    function setDataInterval(day) {
        //default values
        var typeweek = 0;
        var typeday = 1;
        var typemounth = 1;
        var action = 1;
        
        try 
        {
            this.time = new Date(strtotime(day)).getTime();
            return new Date(day);
            // return true;
        } catch (err){
            console.error();
            console.log('Invalide data in function \'setDataInterval\': ');
        }
        
        if(day.indexOf('today') != -1) {
            return dateHelp.todayDate();
            // return true;
        }
        else if(day.indexOf('tomorrow') != -1){
            return dateHelp.tomorrowDay();
            // return true;
        }
        else if(day.indexOf('afterTommorow') != -1){
            return dateHelp.afterTomrrowDay();
            // return true;
        }
        else if(day.indexOf('yesterday') != -1){
            return dateHelp.yesterdayDay();
            // return true;
        }
        else if(day.indexOf('afterYesterday') != -1){
            return dateHelp.afterYesterdatDay();
            // return true;
        }
        else if(day.indexOf('nextweek') != -1){
            typeweek = 1;
            curentDay = this.checkedValDate(day);
            if(!is_null(curentDay)) {///проверяем задан ли день недели
                return (dateHelp.getDateWhithInterval(this.getDaysInterval(curentDay, typeweek), action));
                // return true;
            }
        }
        else if((this.checkedValMonth(day)  != null) && (this.getDayOfMonth()  != null)){//проверяем задан ли месяц
            return (dateHelp.createDate(this.checkedValMonth(day)), this.getDayOfMonth());
            // return true;
        }

        console.log("setDataInterval", this.day);
        return false;
    }

    /**
     * Возвращет день недели, в противном случае null.
     * @param unknown $day
     * @return string|NULL|NULL
     */
    function checkedValDate(day){
        for (var i = 0; i < day.length; i++) {
            if(this.getDayPosition(day[i]) != null){
                return this.getDayPosition(day[i]);
            }
        }
        return null;
    }

    /**
     * Возвращает месяц, в противном случае null.
     * @param unknown $day
     * @return string|NULL|NULL
     */
    function checkedValMonth(day){
        console.log("checkValMounth", day)
        for (var i = 0; i < day.length; i++) {
            if(this.getMonthPosition(day[i])  != null ){
                return this.getMonthPosition(day[i]);
            }
        }
        return null;
    }

    /**
     * Возвращает позицию месяца в году, в противном случае null.
     * @return string|NULL
     */
     function getMonthPosition(day){
        console.log("getMonthPosition", day);
        if(day.charAt(0) == 'm')
            return day.substring(1, day.length - 1);
        else return null;
    }

    /**
     * Возвращает позицию дня в неделе, в противном случае null.
     * @return string|NULL
     */
    function getDayPosition(day){
        console.log("getDayPosition", day);
        if(day.charAt(0) == 'd')
            return day.substring(1, day.length - 1);
        else return null;
    }


        //####################### type value objects #################################
 function getLeson(){
    return this.leson;
}

 function getGroup(){
    return this.group;
}

 function getLaboratory(){
    return this.laboratory;
}


 function getFaculty(){
    return this.faculty;
}

 function getAuditory(){
    return this.auditory;
}

 function getDeanery(){
    return this.deanery;
}


 function getCorps(){
    return this.corps;
}


 function getDormitory(){
    return this.dormitory;
}

 function getPulpit(){
    return this.pulpit;
}


//######################### end type values object ###################################

//#################### type values person ###############################
 function getTeacher(){
    return this.teacher;
}


 function getDean(){
    return this.dean;
}


 function getSecretary(){
    return this.secretary;
}


 function getMainUserPulpit(){
    return this.mainUserPulpit;
}

//###################### end type values person ###############################


module.exports = witModel;