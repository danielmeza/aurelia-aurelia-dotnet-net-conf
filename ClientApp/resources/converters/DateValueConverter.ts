import * as moment from "moment";
export class DateValueConverter {
    toView(value: any, parameter: string) {
        return moment(value).format(parameter);
    }
}