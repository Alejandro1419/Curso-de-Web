
let vv, igv, pv;

vv = Number(prompt('Ingrese el valor del producto: '));

igv = vv * 0.19;
pv = vv + igv;

/*
document.write('El precio de venta del producto es:', vv)
document.write('<br/>El IVA del producto es:', igv);
document.write('</br>El precio final del producto es:' , pv)
*/

document.write(`<pre>
                valor de venta: ${vv} <br>
                IVA:            ${igv} <br>
                precio final:   ${pv} 
                </pre>`);

console.log(`valor de venta\t:${vv}\nIVA\t\t:${igv}\nprecio final\t:${pv}`);
