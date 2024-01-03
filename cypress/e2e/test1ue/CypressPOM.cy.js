import { Homepage } from "../../pom/homepage"
const homepagePom= new Homepage();



describe('POM Usage', () => {
    it('POM examples', () => {
        homepagePom.navigate()
    });
});