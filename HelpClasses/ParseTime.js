// class DateHelp  {
    
    function DateHelp() {

        this.YEAR   = 31556926;
        this.MONTH  = 2629744;
        this.WEEK   = 604800;
        this.DAY    = 86400;
        this.HOUR   = 3600;
        this.MINUTE = 60;

        // this._date = $date;
        // this._mounth = new Date().getMonth();
      }

    // this._date;//дата
    // var _day;//текущий день
    // var _mounth;//текущий месяц
    // var _anotherDay;//другой день
    

    
    
    /**
     * Возвращает разницу между текущим и заданным днями недели.
     * @param Тип недели: 0 - текущая, 1 - следующая, -1 - прошлая.
     * @param День до которго нужно расчитать разницу.
     * @return number
     */
    DateHelp.prototype.getDaysInterval = function(anotheDay, typeWeek){
        var currentDay = new Date().getDay();//Текущий день недели (0-6), начиная с воскресенья
        var tempInterval = currentDay - anotheDay;//находим разницу между днями
        var currentInterval = tempInterval > 0 ? tempInterval++ : tempInterval;
        switch (typeWeek){
            case 0: 
                return currentInterval;
            case 1:
            case -1: 
                return currentInterval + 7;
            default: return null;
        } 
        
    }
    
        
    /**
     * Возвращает дату через заданный пормежуток времени в формате '2013.11.17'.
     * @param unknown $interval
     * @param Что сделать с интервалом: false - вычесть, true - прибавить. 
     */
    DateHelp.prototype.getDateWhithInterval = function(interval, action){
        var d = new Date();
        console.log("getDateWhithInterval", d, d.setDate(d.getDate() + interval))
        return action 
                ? d.setDate(d.getDate() + interval) 
                : d.setDate(d.getDate() - interval);
    }
    
    /**
     * Возвращает новую дату.
     * @param unknown $month Месяц.
     * @param unknown $date Число.
     */
    DateHelp.prototype.createDate = function(month, date){
        try
        {
            console.log("createDate", new Date(month, date, new Date().getFullYear()));
            return new Date(month, date, new Date().getFullYear());
        }
        catch (err){
            console.error();
            console.log('Invalide date. Function \'createDate\'.');
            return null;            
        }

        // if (checkdate(month, date, date('Y')))
        //     return mktime(0, 0, 0, month, date, date('Y'));
        // else {
        //     console.log('Invalide date. Function \'createDate\'.');
        // }
    }
    

    /**
     * Возвращает значение времени через заданный интервал.
     * @param unknown $interval Интервал времени
     * @param unknown $action Что делать: 0 - прибавить, 1 - вычесть.
     * @return number|NULL Возвращает время со здвигом, в противном случае null.
     */
    DateHelp.prototype.shiftTime = function(interval, action){
        var d = new Date();
        // console.log("tomorrowDay", d, d.setDate(d.getDate() + 1))
        // return d.setDate(d.getDate() + 1);
        switch (action){
            case 0:
                console.log("shiftTime", d.setDate(d.getTime() + 1 * interval));
                return d.setDate(d.getTime() + 1 * interval);
            case 1:
                console.log("shiftTime", d.setDate(d.getTime() - 1 * interval));
                return d.setDate(d.getTime() - 1 * interval);
                // return  time() - interval * this.HOUR;
                default:
                    console.log( 'Invalide date. Function \'shiftTime\'.');
                    return null;
        }
    }
    
    /**
     * Возвращает текущую дату в формате '2013-11-17'.
     * @return string
     */
    DateHelp.prototype.todayDate = function(){
        var d = new Date();
         console.log("todayDate", d)
        // return d.setDate(d.getDate() + 1);
        return d;
    }
    
    /**
     * Возвращает завтрашнюю дату в формате '2013-11-17'.
     * @return string
     */
    DateHelp.prototype.tomorrowDay = function() {
        var d = new Date();
        console.log("tomorrowDay", d, d.setDate(d.getDate() + 1))
        return d.setDate(d.getDate() + 1);
        // return date('Y-m-d', time() + this.DAY);
    }
    
    /**
     * Возвращает вчерашнюю дату в формате '2013-11-17'.
     * @return string
     */
    DateHelp.prototype.yesterdayDay = function(){
        var d = new Date();
        console.log("yesterdayDay", d, d.setDate(d.getDate() - 1))
        return d.setDate(d.getDate() - 1);
        // return date('Y-m-d', time() - this.DAY);
    }
    
    /**
     * Возвращает послезавтрашнюю дату в формате '2013-11-17'.
     * @return string
     */
    DateHelp.prototype.afterTomrrowDay = function(){
        var d = new Date();
        console.log("afterTomrrowDay", d, d.setDate(d.getDate() + 2))
        return d.setDate(d.getDate() + 2);
        // return date('Y-m-d', time() + this.DAY * 2);
    }
    
    /**
     * Возвращает позовчерашнюю дату в формате '2013-11-17'.
     * @return string
     */
    DateHelp.prototype.afterYesterdatDay = function(){
        var d = new Date();
        console.log("afterYesterdatDay", d, d.setDate(d.getDate() - 2))
        return d.setDate(d.getDate() - 2);
        // return date('Y-m-d', time() - this.DAY * 2);
    }
// }

module.exports = DateHelp;