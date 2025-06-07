function doStep1(init, callBack) {
	return callBack(init + 1)
}
const output = doStep1(1, (result) => {
	doStep1(result, (result2) => {
		doStep1(result2, (result3) => {
			console.log(`result: ${result3}`)
			return result3
		})
	})
})

console.log(output)
