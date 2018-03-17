 /**
     * Возвращает сформированный запрос на основе переданных данных.
     * @param unknown $query Вопрос.
     * @param unknown $data Данные.
     * @return unknown|NULL Сформированный запрос, в противном случае null.
     */
    function getBuildDBRequest(q, d){

        var data = d;
        var query = q; 
        if(query != null)
        {
            switch (query){
                case 'what':
                    console.log("what");
                    return buildWhatQuery(data);
                case 'where':
                    console.log("where");
                    return buildWhereQuery(data);
                case 'who':
                    console.log("who");
                    return buildWhoQuery(data);
                case 'how':
                    console.log("how");
                    return buildWhoQuery(data);
                case 'what_is_it':
                    return "";
                case '':
                    return "";
                default:
                    return "";
            }
        }
        return "";
    }
    
    /**
     * Формирует запрос для ключевого слова what.
     * @param unknown $data
     */
    buildWhatQuery = function(data){
        /*Примеры реализованных запросов.
         * Какая сейчас пара у группы 4-42. 
         * Какая сейчас пара у Смирнова С.С.
         * Какая пара в аудитории дк12.
         */

        var answer = "";
        if(data.leson != null) {
            answer = answer + data.leson;
            if(data.getDay() != null){
                answer += data.getDay(); 
            }
            if(data.getNameTeacher() != null){
                answer += " " + data.getNameTeacher();
            }
            if(data.getNumberGroup() != null){
                answer += " " + data.getNumberGroup();
            }
            if(data.getNumberAuditory() != null){
                answer += " " + data.getNumberAuditory();
            }
            return answer;
        }
        console.log(">>>>"+answer);
        return answer;
    }
    
    /**
     * Формирует запрос для ключевого слова where.
     * @param unknown $data
     */
    buildWhereQuery = function(data){
        /*Примеры реализованных запросов.
         * В каком корпусе.
         * Где находится корпус А.
         * Где расположена кафедра охт.
         * Где найти дк13.
         * Как пройти к высотке.
         * Где найти преподавателя Смирнова С.С.
         */
        var answer = "";
        if(data.getCorps() != null) {
            answer += data.getCorps();
            if(data.getNameObject() != null){
                answer += data.getNameObject();
            }
            return answer;
        }
        else if(data.getAuditory() != null){
            answer += data.getAuditory();
            if(data.getNumberAuditory() != null){
                answer += data.getNumberAuditory();
            }
            return answer;
        }
        return null;
    }
    
    /**
     * Формирует запрос для ключевого слова who.
     * @param unknown $data
     */
    buildWhoQuery = function(data){
        
        /*Примеры реализованных запросов.
         * Кто такой Смирнов С.С.
         * Как выглядит Бобков С.П.
         */
        var answer = "";
        if(data.getNameTeacher() != null) {
            answer += data.getNameTeacher();
            return answer;
        }
        return null;
    }
    
    /**
     * Формирует запрос для ключевого слова how.
     * @param unknown $data
     */
    buildHowQuery = function(data){
        return null;
    }

    module.exports = {
        getBuildDBRequest: getBuildDBRequest
    }