import classNames from 'classnames/bind';
import styles from '../Home.module.scss';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);

function MostSale() {
    const mostSaleProducts = [
        {
            id: 1,
            img: 'https://product.hstatic.net/200000037048/product/re_quat_xanh_den_moi_cdb2967837ec4d00aa72682343f0d43c_grande.jpg',
            name: 'Váy Rẻ Quạt Xanh Đen MỚI',
            newPrice: '690,000đ',
        },
        {
            id: 2,
            img: 'https://product.hstatic.net/200000037048/product/re_quat_xanh_den_moi_cdb2967837ec4d00aa72682343f0d43c_grande.jpg',
            name: 'Váy Rẻ Quạt Xanh Đen MỚI',
            newPrice: '690,000đ',
        },
        {
            id: 3,
            img: 'https://product.hstatic.net/200000037048/product/re_quat_xanh_den_moi_cdb2967837ec4d00aa72682343f0d43c_grande.jpg',
            name: 'Váy Rẻ Quạt Xanh Đen MỚI',
            newPrice: '690,000đ',
        },
        {
            id: 4,
            img: 'https://product.hstatic.net/200000037048/product/re_quat_xanh_den_moi_cdb2967837ec4d00aa72682343f0d43c_grande.jpg',
            name: 'Váy Rẻ Quạt Xanh Đen MỚI',
            newPrice: '690,000đ',
        },
        {
            id: 5,
            img: 'https://product.hstatic.net/200000037048/product/re_quat_xanh_den_moi_cdb2967837ec4d00aa72682343f0d43c_grande.jpg',
            name: 'Váy Rẻ Quạt Xanh Đen MỚI',
            newPrice: '690,000đ',
        },
        {
            id: 6,
            img: 'https://product.hstatic.net/200000037048/product/re_quat_xanh_den_moi_cdb2967837ec4d00aa72682343f0d43c_grande.jpg',
            name: 'Váy Rẻ Quạt Xanh Đen MỚI',
            newPrice: '690,000đ',
        },
        {
            id: 7,
            img: 'https://product.hstatic.net/200000037048/product/chuchu_linh_lan_55242df4c02442ec85cbda793dfd4a76_master.jpg',
            name: 'Áo Chuchu Linh Lan',
            newPrice: '690,000đ',
            oldPrice: '999,000đ',
        },
        {
            id: 8,
            img: 'https://product.hstatic.net/200000037048/product/chuchu_linh_lan_55242df4c02442ec85cbda793dfd4a76_master.jpg',
            name: 'Áo Chuchu Linh Lan',
            newPrice: '690,000đ',
            oldPrice: '999,000đ',
        },
    ];

    return (
        <div className={cx('element-wrapper')}>
            {mostSaleProducts.map((product) => (
                <ProductItem data={product} key={product.id} />
            ))}
        </div>
    );
}

export default MostSale;
