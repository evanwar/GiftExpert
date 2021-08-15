import  useFetchGifs  from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem";
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && 'Cargando...'}

            <div className="card-grid">

                <ol>
                    {images.map(img => {
                        return <GifGridItem
                            key={img.id}
                            {...img} />;
                    })}
                </ol>
            </div>
        </>
    )
}


GifGrid.PropTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;
