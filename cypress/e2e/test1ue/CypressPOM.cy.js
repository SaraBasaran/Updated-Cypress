import { Homepage } from "../../pom/homepage"
const homepagePom= new Homepage();

import HomepageSecond from "../../pom/homepageSecond";


describe('1-POM Usage', () => {
    it('1.POM examples', () => {
        homepagePom.navigate()
        .pricingbtn()
    });
});

describe.only('2-POM Usage', () => {
    it('2.POM examples', () => {
        HomepageSecond.navigate()
        HomepageSecond.pricingbtn.should('be.visible').and('contain', "Pricing").click()
    });
});