export class URL{
    static HOST = "localhost"
    static PORT = "8080"
    static BACKEND_POINT = "http://"+this.HOST+":"+this.PORT+"/api"
    static DOCTOR_END_POINT = this.BACKEND_POINT+"/doctor"
    static AUTH_END_POINT = this.BACKEND_POINT+"/auth"
    static PERSON_END_POINT = this.BACKEND_POINT+"/person"
    static HOSPITAL_END_POINT = this.BACKEND_POINT+"/hospital"
    static USER_END_POINT = this.BACKEND_POINT+"/user"
    static APPOINTMENT_END_POINT = this.BACKEND_POINT+"/appointment"
}