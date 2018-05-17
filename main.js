class Voce {
    constructor(ime) {
        this.ime = ime;
        this.tezina = (Math.floor(Math.random() * 5) + 2) / 10;
        this.crv = Math.random()
        this.cvrljiva = () => {


            if (this.crv < 0.2) {
                return ` i je cvrljiva`;

            } else {
                return ` i nije cvrljiva`;
            }
        }
        this.print = () => {
            console.log(`  ${this.ime}  je teska  ${this.tezina} kg ${this.cvrljiva()}`);

        }
    }
}

class Sokovnik {
    constructor(kapacitet) {
        this.kapacitet = kapacitet;
        this.posuda = [];
        this.posuda1=[];
        this.dodajVoce = (komada) => {
            for (let i = 0; i < komada; i++) {
                this.posuda.push(new Voce('jabuka'))
                if(this.posuda.crv > 0.2){
                   posuda[i].push(posuda1)
                }
            }
            return this.posuda

        }
        var ukupno = 0;
        this.ukupnaTezina = () => {
            for (var i = 0; i < this.posuda.length; i++) {
                ukupno += this.posuda[i].tezina

            }
            if (ukupno > this.kapacitet) {
                return `Ima previse jabuka u Sokovniku tezina je  ${ukupno} kg`;

            } else {

                return `U sokovniku je   ${ukupno} kg`;
            }

        }


        this.cedenje =()=>{
            if(ukupno<30){

                let sok = ukupno*0.4;
                return   `Iscedjeno je   litara ${sok} soka`;
            }else{
                return   `Previse jabuka u aparatu`;
            }
        }

    }

}

const kolicinaJabuka = (Math.floor(Math.random()*60)+30) ;
const sokovnik = new Sokovnik(30)
sokovnik.dodajVoce(kolicinaJabuka);
sokovnik.cedenje()
console.log(sokovnik.ukupnaTezina());
console.log(sokovnik.cedenje());