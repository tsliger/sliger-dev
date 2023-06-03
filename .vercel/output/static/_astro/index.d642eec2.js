import{r as d}from"./index.94c7be44.js";var T=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],c=t=>{let e=0;for(let r=0;r<t.length;r++){let a=t[r],o=T.indexOf(a);e=e*83+o}return e},M=t=>{let e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},y=t=>{let e=Math.max(0,Math.min(1,t));return e<=.0031308?Math.trunc(e*12.92*255+.5):Math.trunc((1.055*Math.pow(e,.4166666666666667)-.055)*255+.5)},V=t=>t<0?-1:1,P=(t,e)=>V(t)*Math.pow(Math.abs(t),e),D=class extends Error{constructor(t){super(t),this.name="ValidationError",this.message=t}},k=t=>{if(!t||t.length<6)throw new D("The blurhash string must be at least 6 characters");let e=c(t[0]),r=Math.floor(e/9)+1,a=e%9+1;if(t.length!==4+2*a*r)throw new D(`blurhash length mismatch: length is ${t.length} but it should be ${4+2*a*r}`)},q=t=>{let e=t>>16,r=t>>8&255,a=t&255;return[M(e),M(r),M(a)]},B=(t,e)=>{let r=Math.floor(t/361),a=Math.floor(t/19)%19,o=t%19;return[P((r-9)/9,2)*e,P((a-9)/9,2)*e,P((o-9)/9,2)*e]},F=(t,e,r,a)=>{k(t),a=a|1;let o=c(t[0]),l=Math.floor(o/9)+1,i=o%9+1,m=(c(t[1])+1)/166,s=new Array(i*l);for(let h=0;h<s.length;h++)if(h===0){let n=c(t.substring(2,6));s[h]=q(n)}else{let n=c(t.substring(4+h*2,6+h*2));s[h]=B(n,m*a)}let u=e*4,p=new Uint8ClampedArray(u*r);for(let h=0;h<r;h++)for(let n=0;n<e;n++){let E=0,j=0,C=0;for(let f=0;f<l;f++)for(let g=0;g<i;g++){let b=Math.cos(Math.PI*n*g/e)*Math.cos(Math.PI*h*f/r),v=s[g+f*i];E+=v[0]*b,j+=v[1]*b,C+=v[2]*b}let U=y(E),z=y(j),A=y(C);p[4*n+0+h*u]=U,p[4*n+1+h*u]=z,p[4*n+2+h*u]=A,p[4*n+3+h*u]=255}return p},G=F,L=Object.defineProperty,S=Object.defineProperties,H=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,I=(t,e,r)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,x=(t,e)=>{for(var r in e||(e={}))X.call(e,r)&&I(t,r,e[r]);if(w)for(var r of w(e))Y.call(e,r)&&I(t,r,e[r]);return t},O=(t,e)=>S(t,H(e)),$=(t,e)=>{var r={};for(var a in t)X.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&w)for(var a of w(t))e.indexOf(a)<0&&Y.call(t,a)&&(r[a]=t[a]);return r},R=class extends d.PureComponent{constructor(){super(...arguments),this.canvas=null,this.handleRef=t=>{this.canvas=t,this.draw()},this.draw=()=>{let{hash:t,height:e,punch:r,width:a}=this.props;if(this.canvas){let o=G(t,a,e,r),l=this.canvas.getContext("2d"),i=l.createImageData(a,e);i.data.set(o),l.putImageData(i,0,0)}}}componentDidUpdate(){this.draw()}render(){let t=this.props,{hash:e,height:r,width:a}=t,o=$(t,["hash","height","width"]);return d.createElement("canvas",O(x({},o),{height:r,width:a,ref:this.handleRef}))}};R.defaultProps={height:128,width:128};var J={position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"},K=class extends d.PureComponent{componentDidUpdate(){if(this.props.resolutionX<=0)throw new Error("resolutionX must be larger than zero");if(this.props.resolutionY<=0)throw new Error("resolutionY must be larger than zero")}render(){let t=this.props,{hash:e,height:r,width:a,punch:o,resolutionX:l,resolutionY:i,style:m}=t,s=$(t,["hash","height","width","punch","resolutionX","resolutionY","style"]);return d.createElement("div",O(x({},s),{style:O(x({display:"inline-block",height:r,width:a},m),{position:"relative"})}),d.createElement(R,{hash:e,height:i,width:l,punch:o,style:J}))}};K.defaultProps={height:128,width:128,resolutionX:32,resolutionY:32};export{R as o};