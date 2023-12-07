import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryData";

const Category = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    console.log(category);
    return (
        <Container>
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
                {
                    categories.map(iteam => <CategoryBox
                        key={iteam.label}
                        label={iteam.label}
                        icon={iteam.icon}
                        selected = {category === iteam.label}
                    ></CategoryBox>)
                }
            </div>
        </Container>
    );
};

export default Category;