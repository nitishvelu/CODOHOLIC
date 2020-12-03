const lang = {
  java: [
    `public class AddTwoNumbers {
        public static void main(String[] args) {
           int num1 = 5, num2 = 15, sum;
           sum = num1 + num2;
           System.out.println("Sum of these numbers: "+sum);
        }
     }`,
    `import java.util.Scanner;

     class CheckEvenOdd
     {
       public static void main(String args[])
       {
         int num;
         System.out.println("Enter an Integer number:");
         Scanner input = new Scanner(System.in);
         num = input.nextInt();
         if ( num % 2 == 0 )
             System.out.println("Entered number is even");
          else
             System.out.println("Entered number is odd");
       }
     }`,
    `class CharToStringDemo
     {
        public static void main(String args[])
        {
           // Method 1: Using toString() method
           char ch = 'a';
           String str = Character.toString(ch);
           System.out.println("String is: "+str);
           // Method 2: Using valueOf() method
           String str2 = String.valueOf(ch);
           System.out.println("String is: "+str2);
        }
     `,
    `import java.util.Stack;
     import java.util.Scanner;
     class PalindromeTest {
         public static void main(String[] args) {
           System.out.print("Enter any string:");
             Scanner in=new Scanner(System.in);
             String inputString = in.nextLine();
             Stack stack = new Stack();
             for (int i = 0; i < inputString.length(); i++) {
                 stack.push(inputString.charAt(i));
             }
             String reverseString = "";
             while (!stack.isEmpty()) {
                 reverseString = reverseString+stack.pop();
             }
             if (inputString.equals(reverseString))
                 System.out.println("The input String is a palindrome.");
             else
                 System.out.println("The input String is not a palindrome.");
         }
     }`,
    `public class MyClass {
        public static void main(String[] args) {
          int x = 5;
          ++x;
          System.out.println(x);
        }
      }`,
    `public class MyClass {
        public static void main(String[] args) {
          String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          System.out.println("The length of the txt string is: " + txt.length());
        }
      }`,
    `public class MyClass {
        public static void main(String[] args) {
          String txt = "Hello World";
          System.out.println(txt.toUpperCase());
          System.out.println(txt.toLowerCase());
        }
      }`,
    `public class MyClass {
        public static void main(String[] args) {
          String txt = "Please locate where 'locate' occurs!";
          System.out.println(txt.indexOf("locate"));
        }
      }`,
    `public class MyClass {
        public static void main(String[] args) {
          int x = 5;
          int y = 3;
          System.out.println(x == y); // returns false because 5 is not equal to 3
        }
      }`,
    `public class MyClass {
        public static void main(String[] args) {
          String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
          for (String i : cars) {
            System.out.println(i);
          }    
        }
      }`,
    `public class RightTrianglePattern   
      {
          public static void main(String args[])
          {
              int i, j, row=6;
              for(i=0; i<row; i++)
              {
                  for(j=0; j<=i; j++)
                  {
                      System.out.print("* ");
                  }
                  System.out.println();
              }
          }   
  }`,
    `public class LeftTrianglePattern  
    {    
        public static void main(String args[])
  {
  int i, j, row = 6;
  for (i=0; i<row; i++)
  {
  for (j=2*(row-i); j>=0; j--)
  {
  System.out.print(" ");
  }
  for (j=0; j<=i; j++ )
  {
  System.out.print("* ");
  }
  System.out.println();
  }
  }
  }`,
    `public class DownwardTrianglePattern  
  {  
  public static void main(String[] args)  
  {  
  int rows=7;  
  for (int i= rows-1; i>=0 ; i--)  
  {  
  for (int j=0; j<=i; j++)  
  { 
  System.out.print("*" + " ");  
  }   
  System.out.println();  
  }  
  }  
  } `,
    `public class ObjectComparisonExample  
  {  
  public static void main(String[] args)   
  {  
  //creating constructor of the Double class   
  Double x = new Double(123.45555);  
  //creating constructor of the Long class   
  Long y = new Long(9887544);  
  //invoking the equals() method   
  System.out.println("Objects are not equal, hence it returns " + x.equals(y));  
  System.out.println("Objects are equal, hence it returns " + x.equals(123.45555));  
  }  
  } `,
    `public class HashcodeExample  
  {  
  public static void main(String[] args)   
  {  
  //creating two instances of the Employee class  
  Employee emp1 = new Employee(918, "Maria");  
  Employee emp2 = new Employee(918, "Maria");  
  //invoking hashCode() method  
  int a=emp1.hashCode();  
  int b=emp2.hashCode();  
  System.out.println("hashcode of emp1 = " + a);  
  System.out.println("hashcode of emp2 = " + b);  
  System.out.println("Comparing objects emp1 and emp2 = " + emp1.equals(emp2));  
  }  
  }  `,
    `public boolean equals(Object obj)   
  {  
  if (obj == null)   
  return false;  
  if (obj == this)  
  return true;  
  return this.getRegno() == ((Employee) obj). getRegno();  
  }`,
    `public class CopyArray {    
    public static void main(String[] args) {             
        int [] arr1 = new int [] {1, 2, 3, 4, 5};      
        int arr2[] = new int[arr1.length];       
        for (int i = 0; i < arr1.length; i++) {     
            arr2[i] = arr1[i];     
        }`,
    `System.out.println("Elements of original array: ");    
        for (int i = 0; i < arr1.length; i++) {     
           System.out.print(arr1[i] + " ");    
        }       
        System.out.println();       
        System.out.println("Elements of new array: ");    
        for (int i = 0; i < arr2.length; i++) {     
           System.out.print(arr2[i] + " ");    
        }     
    }    
}`,
    `class RotateLeft {  
    public static void main(String[] args) {   
        int [] arr = new int [] {1, 2, 3, 4, 5};  
        int n = 3;  
        System.out.println("Original array: ");  
        for (int i = 0; i < arr.length; i++) {  
            System.out.print(arr[i] + " ");  
        }  `,
    `for(int i = 0; i < n; i++){  
            int j, first;   
            first = arr[0];  
            for(j = 0; j < arr.length-1; j++){    
                arr[j] = arr[j+1];  
            }    
            arr[j] = first;  
        }  
        System.out.println();    
        System.out.println("Array after left rotation: ");  
        for(int i = 0; i< arr.length; i++){  
            System.out.print(arr[i] + " ");  `,
    `import java.lang.Math;   
            public class RandomNumberExample1  
            {   
            public static void main(String args[])   
            {   
            // Generating random numbers  
            System.out.println("1st Random Number: " + Math.random());   
            System.out.println("2nd Random Number: " + Math.random());  
            System.out.println("3rd Random Number: " + Math.random());   
            System.out.println("4th Random Number: " + Math.random());   
            }   
            } `,
    `public class RandomNumberExample5   
            {   
            public static void main(String[] args)   
            {   
            randomInts(5);  
            randomInts(9, 50, 90);  
            }   
            public static void randomInts(int num)   
            {  
            Random random = new Random();  
            random.ints(num).forEach(System.out::println);  
            }
            public static void randomInts(int num, int origin, int bound)   
            {Random random1 = new Random();  
            random1.ints(num, origin, bound).forEach(System.out::println);  
            }  
            }  `,
    `public class RandomNumberExample5   
            {   
            public static void main(String[] args)   
            {   
            randomInts(5);  
            randomInts(9, 50, 90);  
            }   
            public static void randomInts(int num)   
            {  
            Random random = new Random();  
            random.ints(num).forEach(System.out::println);  
            }
            public static void randomInts(int num, int origin, int bound)   
            {Random random1 = new Random();  
            random1.ints(num, origin, bound).forEach(System.out::println);  
            }  
            }  `,
    `public class DownwardTrianglePattern  
            {  
            public static void main(String[] args)  
            {  int rows=7;       
            for (int i= rows-1; i>=0 ; i--)  
            {    
            for (int j=0; j<=i; j++)  
            {  
            
            System.out.print("*" + " ");  
            }   
            System.out.println();  
            }  
            }  
            } `,
    `public class HashcodeExample  
        {  
        public static void main(String[] args)   
        {  
        //creating two instances of the Employee class  
        Employee emp1 = new Employee(918, "Maria");  
        Employee emp2 = new Employee(918, "Maria");  
        //invoking hashCode() method  
        int a=emp1.hashCode();  
        int b=emp2.hashCode();  
        System.out.println("hashcode of emp1 = " + a);  
        System.out.println("hashcode of emp2 = " + b);  
        System.out.println("Comparing objects emp1 and emp2 = " + emp1.equals(emp2));  
        }  
        }   `,
    `public static void main(String args[]){  
                System.out.println("Hello Java");  
               }  
              } ','class a2
              {
                  public static void main(String args[])
                  {
                      double x=2.3d;//narrowing(type casting)
                      int y=(int)x;
                      System.out.println(x);//2.3
                      System.out.println(y);//2
                      int a=10;
                      float b=a;
                      System.out.println(a);//10
                      System.out.println(b);//10.0(widening casting)
                  }
              }`,
    `class a3
              {
                  public static void main(String args[])
                  {
                      
                      System.out.println(5+6+"hi");//56:small variation
                      //----------------------------
                      //mixed mode operation(examples given below)
                      //----------------------------
                      System.out.println(5+6);//11
                      System.out.println(5+6.0);//11.0
                      System.out.println(5.0+6);//11.0
                  }
              }`,
    `class a4
              {
                  public static void main(String args[])
                  {
                      switch(0)//compile time error,error if its floating data type as well
                      {
                          case 0:System.out.println("case true");
                                      // continue;
                      }
                  }
              }`,
    `public class a
              {
                  int x;
              }
              class a1
              {
                  public static void main(String args[])
                  {
                      System.out.println("hello");
                      a ob=new a();
                      System.out.println(ob.x);
                      System.out.println(ob);
                  }
              }`,
    `class a6
              {
                  public static void main(String args[])
                  {
                      Box b1=new Box();
                      Box b2=new Box(10,20,30);
                      System.out.println("-------object b1 details------------");
                      b1.disp();
                      System.out.println("-------object b2 details------------");
                      b2.disp();
                  }
              }`,
    `class Box
              {
                  double width;
                  double height;
                  double depth;
                  Box()
                  {
                      width=0;
                      height=0;
                      depth=0;
                  }
                  Box(int w,int h,int d)//constructor can take parameters as well
                  {
                      width=w;
                      height=h;
                      depth=d;
                  }
                  void disp()
                  {
                      System.out.println("width: "+width);
                      System.out.println("height: "+height);
                      System.out.println("depth: "+depth);
                  }
              }`,
    `class a7
              {
                  public static void main(String args[])
                  {
                      System.out.println("args[0]: "+args[0]);
                      int res=Integer.parseInt(args[1])+10;
                      System.out.println("args[1]+10: "+res);
                      
                  }
              }`,
    `class a8
              {
                  public static void main(String args[])
                  {
                      Scanner ob=new Scanner(System.in);
                      System.out.println("enter int,float,string,char");
                      int a=ob.nextInt();
                      float b=ob.nextFloat();
                      String c=ob.next();
                      char d=ob.next().charAt(0);
                      System.out.println("a: "+a+"b: "+b+"c: "+c+"d: "+d);
                      
                  }
              }`,
    `public static void disp1(int[][] x)
              {
                for(int[] r : x)
                {
                  for(int e : r)
                  {
                    System.out.print(e + "\\t");
                  }
                  System.out.println();
                }
              }
              }`,
    `	public static void disp(int[][] x)
              {
                int i; int j;
                for(i = 0; i < x.length; i++)
                {
                  for(j = 0; j < x[i].length; j++)
                  {
                    System.out.print(x[i][j] + "\\t");
                  }
                  System.out.println();
                }
              }`,
    `	public static void disp(int[][] x)
              {
                int i; int j;
                int n = x.length - 1;
                for(i = 0; i <= n; i++)
                {
                  int m = x[i].length;
                  for(j = 0; j <= (n - m); j++)
                  {
                    System.out.printf("   ");
                  }
                  for(j = 0; j < m; j++)
                  {
                    System.out.printf("%5d ",x[i][j]);
                  }
                  System.out.println();
                }
              }`,
    `	public static void fill(int[][] pt)
              {
                int n = pt.length - 1;
                for(int i = 0; i <= n; i++)
                {
                  pt[i][0] = pt[i][i] = 1;
                  for(int j = 1; j < i; j++)
                  {
                    pt[i][j] = pt[i-1][j-1] + pt[i-1][j];
                  }
                }
              }`,
    `class a
              {
                  public static void main(String args[])
                  {
                      String s="hello";
                      s.toString();
                  }
              }`,
    `class a
              {
                  public static void main(String args[])
                  {
                      StringBuilder s1=new StringBuilder("hello");
                      StringBuffer s2=new StringBuffer("hello");
                      System.out.println(s1.equals(s2));
                  }
              }`,
    `	public static void read(String[] names, Scanner scanner)
              {
                int l = names.length;
                for(int i = 0; i < l; i++)
                {
                  names[i] = scanner.next();
                }
              }`,
    `	public static void disp(String[] names)
              {
                for(String s : names)
                {
                  System.out.println(s);
                }	
              }`,
    `	public static void main(String[] args)
              {
                int n;
                String[] names;
                Scanner scanner = new Scanner(System.in);
                System.out.print("enter # of strings : ");
                n = scanner.nextInt();
                names = new String[n];
                read(names, scanner);
                Arrays.sort(names);
                disp(names);
              }`,
    `public class Client
              {	
                  public static void main(String[] args)
                  {
                      MyNum x = new MyNum(222);
                      x.disp();
                  }
              }`,
    `public class MyNum
              {
                  private int val;
                  private MyNum ref; // some name!
                  public MyNum()
                  {
                      this.val = 111;
                      this.ref = null;
                  }
                  public MyNum(int val)
                  {
                      this.val = val;
                      this.ref = new MyNum();
                  }
                  public void disp()
                  {
                      System.out.println(this.val + ":" +
                          this.ref.val);
                  }
              }`,
    `class Mynum
              {
                private int val;
                private Mynum ref;
              
                public Mynum(){val=111;ref=null;}
                public Mynum(int v){val=v;ref=new Mynum(34);}
                public void disp(){ System.out.println(val+" "+ref.val);
              }
              }
              `,
    `class TestMynum
              {
               public static void main(String[] args){
                Mynum m=new Mynum(23);
                m.disp();
              }
              }`,
    `public class Client
              {	
                  public static void main(String[] args)
                  {
                      MyNum x = new MyNum(222);
                      x.disp();
                      MyNum y = new MyNum(333);
                      y.disp();
                  }
              }`,
    `public class MyNum
              {
                  private int val;
                  private static MyNum ref = new MyNum(1000);  
                  
                  public MyNum(int val)
                  {
                      this.val = val;
                  }
                  // Observe the second part of the display is same for
                  // all objects. ref is shared with all objects.
                  public void disp()
                  {
                      System.out.println(this.val + ":" +
                          this.ref.val);
                  }
              }`,
    `public class CreateObjectExample1   
              {    
              void show()    
              {    
              System.out.println("Welcome to javaTpoint");    
              }    
              public static void main(String[] args)   
              {    
              //creating an object using new keyword   
              CreateObjectExample1 obj = new CreateObjectExample1();   
              //invoking method using the object  
              obj.show();    
              }    
              }`,
    `public class CreateObjectExample2  
              {  
              //constructor of the class    
              CreateObjectExample2()    
              {    
              System.out.println("Welcome to javaTpoint");    
              }    
              public static void main(String[] args)   
              {    
              //creating an object using new keyword   
              CreateObjectExample2 obj = new CreateObjectExample2();   
              }    
              }`,
    `class ArmstrongExample{  
                public static void main(String[] args)  {  
                  int c=0,a,temp;  
                  int n=153;//It is the number to check armstrong  
                  temp=n;  
                  while(n>0)  
                  {  
                  a=n%10;  
                  n=n/10;  
                  c=c+(a*a*a);  
                  }  
                  if(temp==c)  
                  System.out.println("armstrong number");   
                  else  
                      System.out.println("Not armstrong number");   
                 }  
              }  `,
    `class FibonacciExample1{  
                public static void main(String args[])  
                {    
                 int n1=0,n2=1,n3,i,count=10;    
                 System.out.print(n1+" "+n2);//printing 0 and 1    
                    
                 for(i=2;i<count;++i)//loop starts from 2 because 0 and 1 are already printed    
                 {    
                  n3=n1+n2;    
                  System.out.print(" "+n3);    
                  n1=n2;    
                  n2=n3;    
                 }    
                  
                }}`,
    `public class PrintArray {  
                    public static void main(String[] args) {  
                        //Initialize array  
                        int [] arr = new int [] {1, 2, 3, 4, 5};  
                        System.out.println("Elements of given array: ");  
                        //Loop through the array by incrementing value of i  
                        for (int i = 0; i < arr.length; i++) {  
                            System.out.print(arr[i] + " ");  
                        }  
                    }  
                } `,
    `public class PrintAsciiValueExample1   
                {  
                public static void main(String[] args)   
                {  
                // character whose ASCII value to be found  
                char ch1 = 'a';  
                char ch2 = 'b';  
                // variable that stores the integer value of the character  
                int asciivalue1 = ch1;  
                int asciivalue2 = ch2;  
                System.out.println("The ASCII value of " + ch1 + " is: " + asciivalue1);  
                System.out.println("The ASCII value of " + ch2 + " is: " + asciivalue2);  
                }  
                }`,
  ],
  clang: [`int josephus(List* cll, int k)
  {
    while(cll->length != 1)  //condition to check that only one node is present in the singly circular linked list 
    {
      k = k+1;
      if(k>=(cll->length)) //to reduce k if it has excedded the value greater then the lenght off the singly circular linked list
        k = k- cll->length;
      position_delete(cll,k);
    }
    return (cll->head->data);
  }`,``], // add stuff here it wont take long
};

// needs to be modified for now its fine

let index = Math.floor(Math.random() * lang.java.length);
export default lang.java[index];
