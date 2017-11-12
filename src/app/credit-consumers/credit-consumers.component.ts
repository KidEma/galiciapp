import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Customer } from '../customer'
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-credit-consumers',
  templateUrl: './credit-consumers.component.html',
  styleUrls: ['./credit-consumers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreditConsumersComponent implements OnInit {

  private consumers: Customer[];
  private showProgressBar: boolean = false;
  private nonConsumers: Customer[];
  private goToCreditconsumerForm: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.showProgressBar = false;

    this.goToCreditconsumerForm = () => {
      this.showProgressBar = true;
      setTimeout(() => {
        this.router.navigate(['clientescreditosform']);
      },
        5000);
    }

    this.http.get('http://104.131.111.67:8080/loansFE').subscribe(data => {
      console.log(data);
    });

    this.consumers = [{ "state": "CHUBUT", "id": "1600", "streetName": "CANGALLO", "firstName": "DALMIRA", "loan": "1", "streetNumber": "2637", "lat": -35.177539, "lng": -73.258107, "zip": "8165", "city": "ROQUE PÉREZ", "gender": "F", "docNumber": "41693913", "lastName": "LEGUIZAMÓN" }, { "state": "BUENOS AIRES", "id": "1601", "streetName": "LA HUERTA", "firstName": "GERALDINE", "loan": "1", "streetNumber": "4921", "lat": -40.410599, "lng": -89.294248, "zip": "3370", "city": "PILAR", "gender": "F", "docNumber": "25592335", "lastName": "GALLARDO" }, { "state": "SANTA CRUZ", "id": "1602", "streetName": "TACUARA", "firstName": "DHEERA", "loan": "1", "streetNumber": "2717", "lat": -36.472939, "lng": -59.584772, "zip": "6180", "city": "MONTE HERMOSO", "gender": "M", "docNumber": "88883803", "lastName": "RUIZ" }, { "state": "ENTRE RÍOS", "id": "1603", "streetName": "TEODORO VILARDEBO", "firstName": "ORVIN", "loan": "1", "streetNumber": "1114", "lat": -17.595283, "lng": -53.879777, "zip": "6606", "city": "GENERAL PAZ", "gender": "M", "docNumber": "23681400", "lastName": "GUERRERO" }, { "state": "ENTRE RÍOS", "id": "1604", "streetName": "YAPEYU", "firstName": "PERVIS", "loan": "1", "streetNumber": "621", "lat": -99.162968, "lng": -72.845407, "zip": "1307", "city": "RAMALLO", "gender": "M", "docNumber": "53022324", "lastName": "SORIA" }, { "state": "ENTRE RÍOS", "id": "1605", "streetName": "CACHIMAYO", "firstName": "GARRETT", "loan": "1", "streetNumber": "6699", "lat": -94.71963, "lng": -19.688789, "zip": "6561", "city": "PILAR", "gender": "M", "docNumber": "82539874", "lastName": "MORENO" }, { "state": "CHACO", "id": "1606", "streetName": "AMADEO JACQUES", "firstName": "YAGO", "loan": "1", "streetNumber": "957", "lat": -54.876913, "lng": -10.716089, "zip": "7979", "city": "GENERAL PAZ", "gender": "M", "docNumber": "70443359", "lastName": "BATKIS" }, { "state": "CHACO", "id": "1607", "streetName": "PASAJE PARTICULAR", "firstName": "HANIA", "loan": "1", "streetNumber": "8968", "lat": -70.875328, "lng": -95.895186, "zip": "7671", "city": "LAS FLORES", "gender": "F", "docNumber": "82529559", "lastName": "SÁNCHEZ" }, { "state": "MISIONES", "id": "1608", "streetName": "ALEJANDRO M DE AGUADO", "firstName": "RAPHAELA", "loan": "1", "streetNumber": "1637", "lat": -83.301777, "lng": -79.760815, "zip": "8763", "city": "ESCOBAR", "gender": "F", "docNumber": "86262978", "lastName": "AGUILERA" }, { "state": "MENDOZA", "id": "1609", "streetName": "ADOLFO SALDIAS", "firstName": "AGATON", "loan": "1", "streetNumber": "5710", "lat": -23.804708, "lng": -91.447958, "zip": "2807", "city": "SALLIQUELÓ", "gender": "M", "docNumber": "52258579", "lastName": "GUERRERO" }, { "state": "SANTA FÉ", "id": "1610", "streetName": "OCEANIA", "firstName": "TAMIKA", "loan": "1", "streetNumber": "9997", "lat": -55.708606, "lng": -96.242283, "zip": "5896", "city": "PATAGONES", "gender": "F", "docNumber": "27994790", "lastName": "VALDEZ" }, { "state": "BUENOS AIRES", "id": "1611", "streetName": "GALLO", "firstName": "MAHA", "loan": "1", "streetNumber": "9899", "lat": -30.327887, "lng": -35.51747, "zip": "5291", "city": "MERLO", "gender": "F", "docNumber": "32423915", "lastName": "ORELLANA" }, { "state": "BUENOS AIRES", "id": "1612", "streetName": "LA CACHILA", "firstName": "NATESA", "loan": "2", "streetNumber": "2587", "lat": -65.154808, "lng": -91.705984, "zip": "7127", "city": "CIUDAD AUTÓNOMA DE BUENOS AIRES", "gender": "F", "docNumber": "67606123", "lastName": "MORENO" }, { "state": "CHACO", "id": "1613", "streetName": "SAN FRANCISCO DE ASIS", "firstName": "MAIA", "loan": "1", "streetNumber": "1356", "lat": -48.508662, "lng": -51.916343, "zip": "8525", "city": "MORENO", "gender": "F", "docNumber": "94498072", "lastName": "BUSTOS" }, { "state": "SAN LUIS", "id": "1614", "streetName": "JACARANDA", "firstName": "HAIAN", "loan": "1", "streetNumber": "2062", "lat": -17.110723, "lng": -17.821501, "zip": "2354", "city": "TORNQUIST", "gender": "M", "docNumber": "78590292", "lastName": "TAPIA" }, { "state": "CHACO", "id": "1615", "streetName": "CACIQUE", "firstName": "AISHA", "loan": "0", "streetNumber": "9054", "lat": -69.936705, "lng": -30.73927, "zip": "1815", "city": "PERGAMINO", "gender": "F", "docNumber": "91086954", "lastName": "ARCE" }, { "state": "LA RIOJA", "id": "1616", "streetName": "AGUILAR", "firstName": "OLGA", "loan": "1", "streetNumber": "9802", "lat": -87.949775, "lng": -72.284615, "zip": "9397", "city": "PRESIDENTE PERÓN", "gender": "F", "docNumber": "14165794", "lastName": "GUERRERO" }, { "state": "ENTRE RÍOS", "id": "1617", "streetName": "MAR ARGENTINO", "firstName": "YA", "loan": "1", "streetNumber": "4422", "lat": -68.332776, "lng": -89.987268, "zip": "1312", "city": "AZUL", "gender": "F", "docNumber": "29977078", "lastName": "DUARTE" }, { "state": "SAN LUIS", "id": "1618", "streetName": "CALCENA", "firstName": "XENIA", "loan": "4", "streetNumber": "3884", "lat": -31.894201, "lng": -69.262999, "zip": "6040", "city": "TANDIL", "gender": "F", "docNumber": "64515157", "lastName": "SAN MARTÍN" }, { "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES", "id": "1619", "streetName": "GABRIEL LAFOND", "firstName": "UDO", "loan": "0", "streetNumber": "7899", "lat": -59.173278, "lng": -21.736783, "zip": "4621", "city": "BALCARCE", "gender": "M", "docNumber": "84502582", "lastName": "ZÚÑIGA" }, { "state": "JUJUY", "id": "1620", "streetName": "SALTO", "firstName": "DENICE", "loan": "0", "streetNumber": "6167", "lat": -75.644608, "lng": -89.542892, "zip": "1363", "city": "SAN CAYETANO", "gender": "F", "docNumber": "26268333", "lastName": "MÉNDEZ" }, { "state": "RÍO NEGRO", "id": "1621", "streetName": "BARADERO", "firstName": "MACABEO", "loan": "1", "streetNumber": "2374", "lat": -61.486022, "lng": -65.729012, "zip": "8157", "city": "GENERAL ALVEAR", "gender": "M", "docNumber": "24553479", "lastName": "SUÁREZ" }, { "state": "JUJUY", "id": "1622", "streetName": "AMPERE", "firstName": "LASCA", "loan": "1", "streetNumber": "4756", "lat": -70.642548, "lng": -25.920849, "zip": "5758", "city": "MAR CHIQUITA", "gender": "F", "docNumber": "16536414", "lastName": "GUZMÁN" }, { "state": "NEUQUÉN", "id": "1623", "streetName": "TARTAGAL", "firstName": "HELVIO", "loan": "0", "streetNumber": "9589", "lat": -51.519417, "lng": -31.751082, "zip": "6662", "city": "AVELLANEDA", "gender": "M", "docNumber": "64695161", "lastName": "VALDÉS" }, { "state": "TUCUMÁN", "id": "1624", "streetName": "BARZANA", "firstName": "DIOGENES", "loan": "1", "streetNumber": "189", "lat": -88.482247, "lng": -67.591819, "zip": "2995", "city": "BARADERO", "gender": "M", "docNumber": "68289930", "lastName": "MORALES" }, { "state": "SANTA FÉ", "id": "1625", "streetName": "AMAMBAY", "firstName": "BARSANUFIO", "loan": "1", "streetNumber": "2379", "lat": -31.524453, "lng": -31.975943, "zip": "5990", "city": "SAN PEDRO", "gender": "M", "docNumber": "79409914", "lastName": "RODRÍGUEZ" }, { "state": "TUCUMÁN", "id": "1626", "streetName": "QUINTINO BOCAYUVA", "firstName": "CARMELITA", "loan": "1", "streetNumber": "3208", "lat": -93.282783, "lng": -58.856027, "zip": "8778", "city": "BAHÍA BLANCA", "gender": "F", "docNumber": "53037082", "lastName": "ESPINOZA" }, { "state": "TIERRA DE FUEGO", "id": "1627", "streetName": "FARADAY", "firstName": "KEONA", "loan": "1", "streetNumber": "3634", "lat": -68.357408, "lng": -30.862135, "zip": "9939", "city": "PILAR", "gender": "F", "docNumber": "90284130", "lastName": "ZÚÑIGA" }, { "state": "FORMOSA", "id": "1628", "streetName": "LA RIOJA", "firstName": "KAMA", "loan": "1", "streetNumber": "9368", "lat": -10.65952, "lng": -39.776163, "zip": "1381", "city": "PILA", "gender": "F", "docNumber": "24176236", "lastName": "AGUIRRE" }, { "state": "BUENOS AIRES", "id": "1629", "streetName": "VALPARAISO", "firstName": "CATERINE", "loan": "1", "streetNumber": "3303", "lat": -49.154484, "lng": -72.719701, "zip": "9632", "city": "TORNQUIST", "gender": "F", "docNumber": "18158382", "lastName": "SÁNCHEZ" }, { "state": "TIERRA DE FUEGO", "id": "1630", "streetName": "NATAL", "firstName": "LEONIE", "loan": "1", "streetNumber": "1805", "lat": -55.669356, "lng": -30.953565, "zip": "9887", "city": "ADOLFO ALSINA", "gender": "F", "docNumber": "20631526", "lastName": "FRANCO" }, { "state": "SALTA", "id": "1631", "streetName": "DEL BAÑADO", "firstName": "MALVA", "loan": "1", "streetNumber": "9141", "lat": -72.962445, "lng": -72.291659, "zip": "4258", "city": "ADOLFO GONZALES CHAVES", "gender": "F", "docNumber": "54241852", "lastName": "PONCE" }, { "state": "ENTRE RÍOS", "id": "1632", "streetName": "FELIX FRIAS", "firstName": "KHALIL", "loan": "1", "streetNumber": "4138", "lat": -79.691242, "lng": -70.926809, "zip": "7137", "city": "FLORENCIO VARELA", "gender": "M", "docNumber": "37350614", "lastName": "GUTIÉRREZ" }, { "state": "CÓRDOBA", "id": "1633", "streetName": "NAHUEL HUAPI", "firstName": "ROGACIANO", "loan": "1", "streetNumber": "8279", "lat": -48.198225, "lng": -14.372977, "zip": "3392", "city": "GENERAL PINTO", "gender": "M", "docNumber": "46150754", "lastName": "ARAYA" }, { "state": "SANTIAGO DEL ESTERO", "id": "1634", "streetName": "BARTOLOME HIDALGO", "firstName": "REMIGIO", "loan": "0", "streetNumber": "4421", "lat": -41.275481, "lng": -17.373933, "zip": "4565", "city": "MERCEDES", "gender": "M", "docNumber": "95286551", "lastName": "PÉREZ" }, { "state": "FORMOSA", "id": "1635", "streetName": "QUINTINO BOCAYUVA", "firstName": "HILLIARD", "loan": "0", "streetNumber": "5121", "lat": -99.260905, "lng": -76.754244, "zip": "1569", "city": "CHACABUCO", "gender": "M", "docNumber": "51477142", "lastName": "ARCE" }, { "state": "JUJUY", "id": "1636", "streetName": "PARIS", "firstName": "VISSIA", "loan": "0", "streetNumber": "4917", "lat": -42.547428, "lng": -30.290841, "zip": "7810", "city": "TRENQUE LAUQUEN", "gender": "F", "docNumber": "20941156", "lastName": "POBLETE" }, { "state": "ENTRE RÍOS", "id": "1637", "streetName": "AGUILAR", "firstName": "GODEBERTA", "loan": "0", "streetNumber": "5848", "lat": -18.460966, "lng": -22.99932, "zip": "4839", "city": "NAVARRO", "gender": "F", "docNumber": "28673420", "lastName": "SILVA" }, { "state": "MISIONES", "id": "1638", "streetName": "REMEDIOS DE ESCALADA S MARTIN", "firstName": "MALIA", "loan": "0", "streetNumber": "9281", "lat": -12.487751, "lng": -11.103683, "zip": "8431", "city": "SALADILLO", "gender": "F", "docNumber": "74813602", "lastName": "ARIAS" }, { "state": "CHUBUT", "id": "1639", "streetName": "JACARANDA", "firstName": "OGDEN", "loan": "0", "streetNumber": "4476", "lat": -89.786935, "lng": -40.461778, "zip": "7546", "city": "TAPALQUÉ", "gender": "M", "docNumber": "38718517", "lastName": "" }, { "state": "BUENOS AIRES", "id": "1640", "streetName": "CACHIMAYO", "firstName": "CARON", "loan": "0", "streetNumber": "4685", "lat": -55.578733, "lng": -90.319892, "zip": "2926", "city": "ZÁRATE", "gender": "F", "docNumber": "62543117", "lastName": "MALDONADO" }, { "state": "LA PAMPA", "id": "1641", "streetName": "LA CORDILLERA", "firstName": "GRANIA", "loan": "0", "streetNumber": "2381", "lat": -40.11672, "lng": -17.214043, "zip": "8578", "city": "TAPALQUÉ", "gender": "F", "docNumber": "51121137", "lastName": "ALARCÓN" }, { "state": "MISIONES", "id": "1642", "streetName": "CAÑONERA AMERICA", "firstName": "KIN", "loan": "0", "streetNumber": "5830", "lat": -84.628206, "lng": -35.278672, "zip": "7375", "city": "CAMPANA", "gender": "M", "docNumber": "37791892", "lastName": "SUÁREZ" }, { "state": "ENTRE RÍOS", "id": "1643", "streetName": "EL ARAUCANO", "firstName": "YASIM", "loan": "0", "streetNumber": "2955", "lat": -63.795232, "lng": -17.426756, "zip": "5043", "city": "GENERAL LAS HERAS", "gender": "M", "docNumber": "28628787", "lastName": "CAMPOS" }, { "state": "SAN LUIS", "id": "1644", "streetName": "ADOLFO GONZALEZ CHAVES", "firstName": "FRANCA", "loan": "0", "streetNumber": "7677", "lat": -81.56677, "lng": -87.678316, "zip": "7098", "city": "VICENTE LÓPEZ", "gender": "F", "docNumber": "31336231", "lastName": "CARRIZO" }, { "state": "SAN LUIS", "id": "1645", "streetName": "MANUEL EGUIA", "firstName": "DION", "loan": "0", "streetNumber": "2562", "lat": -60.937539, "lng": -13.816757, "zip": "8436", "city": "MORENO", "gender": "M", "docNumber": "26793354", "lastName": "HERRERA" }, { "state": "TIERRA DE FUEGO", "id": "1646", "streetName": "PASAJE PARTICULAR", "firstName": "MARCIANO", "loan": "0", "streetNumber": "4518", "lat": -61.261872, "lng": -12.270155, "zip": "7362", "city": "ALBERTI", "gender": "M", "docNumber": "22657441", "lastName": "BUSTAMANTE" }, { "state": "JUJUY", "id": "1647", "streetName": "DE LAS CASUARINAS", "firstName": "HELDRADO", "loan": "0", "streetNumber": "1998", "lat": -45.368789, "lng": -82.357611, "zip": "4993", "city": "SUIPACHA", "gender": "M", "docNumber": "60289139", "lastName": "ARAYA" }, { "state": "SANTIAGO DEL ESTERO", "id": "1648", "streetName": "HAITI", "firstName": "ILDARA", "loan": "0", "streetNumber": "4030", "lat": -66.814326, "lng": -25.849671, "zip": "3152", "city": "TRENQUE LAUQUEN", "gender": "F", "docNumber": "41538793", "lastName": "ROMERO" }, { "state": "FORMOSA", "id": "1649", "streetName": "MAITEN", "firstName": "NEWTON", "loan": "0", "streetNumber": "6912", "lat": -79.676305, "lng": -19.470331, "zip": "9520", "city": "GENERAL VILLEGAS", "gender": "M", "docNumber": "51060391", "lastName": "MENDOZA" }]

    this.nonConsumers = [
      {
        id: '001',
        firstName: 'juan domingo',
        lastName: 'Perón',
        docNumber: '123457',
        streetNumber: 'string',
        streetName: "12223456",
        city: 'Bariloche',
        state: 'Washington',
        zip: '123456',
        lat: 123456,
        lng: 3456,
        gender: "false"
      }, {
        id: '001',
        firstName: 'juan domingo',
        lastName: 'Perón',
        docNumber: '123457',
        streetNumber: 'string',
        streetName: "12223456",
        city: 'Bariloche',
        state: 'Washington',
        zip: '123456',
        lat: 123456,
        lng: 3456,
        gender: "false"
      }, {
        id: '001',
        firstName: 'juan domingo',
        lastName: 'Perón',
        docNumber: '123457',
        streetNumber: 'string',
        streetName: "12223456",
        city: 'Bariloche',
        state: 'Washington',
        zip: '123456',
        lat: 123456,
        lng: 3456,
        gender: "false"
      },

    ];
  }

}
