import {CustomMap} from "./CustomMap";
import {User} from "./User";
import {Company} from "./Compnay";

const customMap = new CustomMap('map');

const user = new User();
customMap.addMarker(user)

const company = new Company();
customMap.addMarker(company)
