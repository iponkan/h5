 # h5页面反编译

## 背景
为什么我们需要反编译H5页面？因为自己手动去写html,css3太费事费力，如果每个没有都需要自己设计自己去写，那么工作量是很大的，很难大规模使用。因此为提高效率我们需要做的是（1）H5页面的复用，我们将已经实现的H5页面封装成组件复用。（2）针对市场上已经有的优秀的H5页面，我们可以快速学习（代码复制过来用就是学习了~~）。本项目我们针对第二点进行

## 工具——微信开发者工具
使用微信开发者工具，我们可以打开H5页面，选择包含所以页面元素的最新父布局，复制代码。由于复制到的代码比较乱，我们需要先对代码进行格式化。然后保存到文件。

## 反编译代码
	import java.io.BufferedReader;
	import java.io.BufferedWriter;
	import java.io.File;
	import java.io.FileOutputStream;
	import java.io.FileReader;
	import java.io.IOException;
	import java.io.OutputStreamWriter;
	
	public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub	
		separate();
		normalization();
	}
	
	private static void normalization(){
		String originFileName = "/Users/xiezhaofei/html/target.txt";
		String targeFileName = "/Users/xiezhaofei/html/result.txt";
		
		if(new File(targeFileName).exists()){
			new File(targeFileName).delete();
		}
		try {
			new File(targeFileName).createNewFile();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		CssNormalization cssMaker = new CssNormalization(414,652.05);
		FileReader fr=null;
		BufferedReader bf = null;
		BufferedWriter out = null ;  
		try {
			//文件输入
			fr = new FileReader(originFileName);
			bf = new BufferedReader(fr);
			
			//文件输出 
			out = new  BufferedWriter( new  OutputStreamWriter(  
                    new  FileOutputStream(targeFileName,  true )));  
             
			
			String str;
			String result;
			// 按行读取字符串
			while ((str = bf.readLine()) != null) {
				result = cssMaker.trimCss(str);
				out.write(result); 
			}
			  
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			try {
				if(bf!=null){
					bf.close();
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			try {
				if(fr!=null){
					fr.close();
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			try {
				if(out!=null){
					out.close();
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	private static void separate(){
		String originFileName = "/Users/xiezhaofei/html/origin.txt";
		String targeFileName = "/Users/xiezhaofei/html/target.txt";
		String cssFileName = "/Users/xiezhaofei/html/css.txt";
		CssSeparateAni cssSeparate = new CssSeparateAni(originFileName,targeFileName,cssFileName);
		cssSeparate.separareAni();
	}
	}
	
//
	
	public class CssNormalization {
	
		private String unit = "px";
		private char emptych = ' ';
		private double width = 400;
		private double height = 600;
		
		private String[] WIDHT = new String[]{"width","margin-left","left","margin-right","right"};
		private String[] HEIGHT = new String[]{"height","margin-top","top","margin-bottom","bottom"};
		
		
		public CssNormalization(double w,double h){
			width = w;
			height = h;
		}
		
		public String trimCss(String inputString){
			
			int lastIndex = 0;
			String result = inputString;
			while(true){
				int pxindex = indexOfUnit(result,lastIndex);
				
				if(pxindex<0){
					break;
				}
				
				if(lastIndex == pxindex){
					pxindex = indexOfUnit(result,lastIndex+1);
				}
				
				if(pxindex<0){
					break;
				}
				
				String tmp = trimCss(result,pxindex);
				if(tmp!=null){
					result = tmp;
				}
				
				lastIndex = pxindex;
				
				
			}
			out("result="+result);
			return result;
			
		}
		
		public int indexOfUnit(String inputString){
			return inputString.indexOf(unit);
		}
		
		public int indexOfUnit(String inputString,int fromIndex){
			return inputString.indexOf(unit,fromIndex);
		}
		
		private String removeUnusedAttri(String inputString){
			//去除margin-xxx;这个属性不能使用百分比来表示。所以不好进行屏幕适配。发现模板H5页面中只是用这个属性进行居中，故可以用其他方式进行居中。
			if(inputString.contains("margin-left") || inputString.contains("margin-top")){
				String l = getKey_Value(inputString,"margin-left");
				String t = getKey_Value(inputString,"margin-top");
				String left = getKey_Value(inputString,"left");
				String top = getKey_Value(inputString,"top");
				if(l!=null){
					inputString = inputString.replace(l, "");
				}
				if(t!=null){
					inputString =inputString.replace(t, "");
				}
				if(left!=null){
					inputString =inputString.replace(left, "");
				}
				if(top!=null){
					inputString =inputString.replace(top, "");
				}
				return inputString;
			}
			///////////
			
			return inputString;
		}
		
		private String getKey_Value(String inputString,String key) {
			if(inputString.contains(key)){
				int keyIndex = inputString.indexOf(key);
				int semicolon = inputString.indexOf(";", keyIndex);
				return inputString.substring(keyIndex, semicolon+1);
			}
			return null;
		}
		
		private String getValue(String inputString,String key){
			
			return null;
		}
		
		public String trimCss(String inputString,int index){		
			inputString = removeUnusedAttri(inputString);
			
			out("inputString = "+inputString);
			int pre = index-1;
			int next = index+2;
			char nextChar = inputString.charAt(next);
			out("nextChar = "+nextChar);
			if(nextChar!=' '&& nextChar!=';'){
				return null;
			}
			int emptyChar = indexOfFirstInvalidChar(inputString,pre);
			out("emptyChar index = "+emptyChar);
			if(emptyChar<0){
				return null;
			}
			String num = inputString.substring(emptyChar+1, index);
			
			
			
			out("num ="+num);
			
			if(!isNumber(num)){
				return null;
			}
			
			
			String aheadkey = aheadKey(inputString,emptyChar);
			out("ahead key ="+aheadkey);
			
			double f = -1;
			boolean isWidth = false;
			boolean isHeight = false;
			for(int i = 0;i<WIDHT.length;i++){
				if(aheadkey.contains(WIDHT[i])){
					double intNum = Double.parseDouble(num);
					out("int num ="+intNum);
					f = intNum * 1.0f / width;
					out("f ="+f);
					isWidth = true;
					break;
				}
			}
			if(!isWidth){
				for(int i = 0;i<HEIGHT.length;i++){
					if(aheadkey.contains(HEIGHT[i])){
						double intNum = Double.parseDouble(num);
						out("int num ="+intNum);
						f = intNum * 1.0f / height;
						out("f ="+f);
						isHeight = true;
						break;
					}
				}
			}
			
			if(isWidth||isHeight){
				StringBuilder sb = new StringBuilder();
				sb = sb.append(inputString.substring(0, emptyChar+1));
				sb.append(f * 100);
				sb.append("%");
				sb.append(inputString.substring(index+unit.length()));
				out(sb.toString());
				return sb.toString();
			}else{
				return inputString;
			}
		}
		
		private boolean isNumber(String str){
			try{
				Double.parseDouble(str);
				return true;
			}catch (Exception e){
				e.printStackTrace();
			}
			return false;
		}
		
		private int indexOfFirstInvalidChar(String inputString,int index){
			for(int i = index -1;i>=0;i--){
				char ch = inputString.charAt(i);
				if(!isValid(ch)){
					return i;
				}
			}
			return -1;
		}
		
		private String aheadKey(String inputString,int index){
			int x = 0;
			for(int i = index -1;i>=0;i--){
				char ch = inputString.charAt(i);
				if(ch==';'||ch==' '){
					if(inputString.charAt(i+1)!=':'){
						x = i;
						break;
					}
				}
			}
			return inputString.substring(x, index);
		}
		
		private boolean isValid(char ch){
			if(ch=='+'||ch=='-'||ch=='.'){
				return true;
			}
			if(ch=='0'||ch=='1'||ch=='2'||ch=='3'||ch=='4'||ch=='5'||ch=='6'||ch=='7'||ch=='8'||ch=='9'){
				return true;
			}
			return false;
		}
		
		
		private void out(String str){
			System.out.println("xzf "+str);
		}
	}
	
//
	import java.io.BufferedReader;
	import java.io.BufferedWriter;
	import java.io.File;
	import java.io.FileOutputStream;
	import java.io.FileReader;
	import java.io.IOException;
	import java.io.OutputStreamWriter;
	
	public class CssSeparateAni {
		private String originFilePath;
		private String targetFilePath;
		private String aniCssFilePath;
		
		private int count = 0;
		
		public CssSeparateAni(String origin,String target,String css){
			originFilePath = origin;
			targetFilePath = target;
			aniCssFilePath = css;
			
			File targetFile = new File(targetFilePath);
			if(targetFile.exists()){
				targetFile.delete();
			}
			try {
				targetFile.createNewFile();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			File aniCssFile = new File(aniCssFilePath);
			if(aniCssFile.exists()){
				aniCssFile.delete();
			}
			try {
				aniCssFile.createNewFile();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		public void separareAni(){
			FileReader fr=null;
			BufferedReader bf = null;
			BufferedWriter out = null ;  
			BufferedWriter css = null;
			try {
				//文件输入
				fr = new FileReader(originFilePath);
				bf = new BufferedReader(fr);
				
				//文件输出 
				out = new  BufferedWriter( new  OutputStreamWriter(  
	                    new  FileOutputStream(targetFilePath,  true )));  
	             
				css = new  BufferedWriter( new  OutputStreamWriter(  
	                    new  FileOutputStream(aniCssFilePath,  true ))); 
				
				String str;
				String result;
				
				String[] outs = new String[2];
				// 按行读取字符串
				while ((str = bf.readLine()) != null) {
					separateAni(str,outs);
					if(outs[0]!=null){
						out.write(outs[0]);
					}
					
					if(outs[1]!=null){
						css.write(outs[1]);
						css.newLine();
					}
				}
				  
			} catch (IOException e) {
				e.printStackTrace();
			}finally{
				try {
					if(bf!=null){
						bf.close();
					}
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				try {
					if(fr!=null){
						fr.close();
					}
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				try {
					if(out!=null){
						out.close();
					}
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				if(css!=null){
					try {
						css.close();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
		}
	
	
		public void separateAni(String inputString,String[] outs){
			//out(inputString);
			String result = inputString;
			String css = null;
			String tmp;
			
			if(result!=null && result.contains("style")){
				int index = result.indexOf("animation");
				if(index>=0){
					int end = result.indexOf(";",index);
					tmp = result.substring(index, end+1);
					//
					result = result.replace(tmp, "") +" v-bind:class=\"anirun ? '"+"div"+count+"Ani' : null\"";
					
					out(result);
					css = ".div"+count+"Ani{"+tmp+"}";
					out(css);
					count++;
				}
			}
			outs[0] = result;
			outs[1] = css;
		}
	
	
		private void out(String str){
			//System.out.println("hhh "+str);
		}
	}



将输出的html,css3代码写入组件，进行视觉还原。

