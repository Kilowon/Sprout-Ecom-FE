export default function Product({ product }) {
	//Extract prop
	const { title, price, image } = product.attributes
	console.log({ image })
	return (
		<div>
			<div>
				<img src={image.data[0].attributes.formats.small.url} alt="" />
			</div>
			<h2>{title}</h2>
			<h3>{price}</h3>
		</div>
	)
}
