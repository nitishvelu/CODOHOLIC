const txtgen = require('txtgen');


var paragraph = txtgen.paragraph();

const lang = {
  english: paragraph,
  javalang: [
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
  clang: [` k if it has excedded the value greater then the lenght off the singly circular linked list
  k = k- cll->length;
position_delete(cll,k);int josephus(List* cll, int k)
{
while(cll->length != 1)  //condition to check that only one node is present in the singly circular linked list 
{
k = k+1;
if(k>=(cll->length)) //to reduce
}
return (cll->head->data);
}`,`void heap_print(heap *my_heap)
{
  while(heap_get_size(my_heap) != 0) {
    printf("%d\n", heap_get_min(my_heap));
    heap_remove(my_heap);
  }

}`,`static Node* create_Node(int data, Node* link)
{
 Node* new = (Node*)malloc(sizeof(Node));
   new->link = NULL;
   new->data = data;
 return new;
}`,`void list_initialize(List* ptr_list) 
{
  ptr_list->head=NULL;
  ptr_list->number_of_Nodes=0;
}`,`void list_insert_front(List* ptr_list, int data) 
{
  Node* new = create_Node(data,ptr_list->head);
  if(ptr_list->head==NULL)
  {
    ptr_list->head=new;
  }
  else
  {
    new->link=ptr_list->head;
    ptr_list->head=new;	
  }	
  ptr_list->number_of_Nodes++;
}`,`const int Node_get_data(Node *Node_ptr) 
{
if (Node_ptr!=NULL)
  {
    return Node_ptr->data;
  }
else
  return;	
}`,`void list_delete_front(List* ptr_list) 
{
   if(ptr_list->head==NULL)
    {
        return ;
    }
    Node *t=ptr_list->head;
    ptr_list->head=t->link;
    free(t);
    ptr_list->number_of_Nodes--;
}`,`void list_destroy(List* ptr_list) 
{
  Node *p = ptr_list->head;
  Node *q = NULL;
  for(int i=0;i<ptr_list->number_of_Nodes;i++)
    {
    q = p;
    p = p->link;
    free(q);
  }
  
    free(ptr_list);
}`,`void List_insert_front(List* ptr_List, int data) 
{
  Node* new = create_Node(data,ptr_List->head);
  if(ptr_List->head==NULL)
  {
    ptr_List->head=new;
  }
  else
  {
    new->link=ptr_List->head;
    ptr_List->head=new;	
  }	
  ptr_List->number_of_Nodes++;
}`,`void List_delete_front(List* ptr_List)
{
  if(ptr_List->head==NULL)
    {
        return ;
    }
    Node *t=ptr_List->head;
    ptr_List->head=t->link;
    free(t);
    ptr_List->number_of_Nodes--;
}`,`stack* stack_initialize(int size)
{
    stack *stack = (stack*)malloc(sizeof(stack));
    stack->top = -1;
    stack->arr = (int *)malloc(sizeof(int)*size);
    return stack;
}`,`void stack_push(stack *ptr_stack, int key)
{
    ptr_stack->top++;
    ptr_stack->arr[ptr_stack->top] = key;
}`,`void stack_pop(stack *ptr_stack)
{
    if(ptr_stack->top == -1)
        return;
    ptr_stack->top--;
}`,`int stack_is_empty(stack *ptr_stack)
{
    if(ptr_stack->top == -1)
        return 1;
    return 0;
}`,`  int Prec(char ch) 
{ 
    switch (ch) 
    { 
    case '+': 
    case '-': 
        return 1; 

    case '*': 
    case '/': 
        return 2; 

    case '^': 
        return 3; 
    } 
    return -1; 
} `,`void list_insert_rear(List *ptr_list, int id, int time)
{
   // Create a new  node 
    node* temp = create_node(id,time,ptr_list->head); 
  
    // If list is empty, then new node is head and tail both 
    if (ptr_list->tail == NULL) { 
        ptr_list->head  = temp; 
        ptr_list->tail= temp; 
    } 
  else
   { // Add the new node at the end of queue and change tail 
    ptr_list->tail->link = temp; 
    ptr_list->tail = temp;
  }
  ptr_list->number_of_nodes++;
}`,`void queue_peek(Queue *ptr)
{
  if (queue_is_empty(ptr) == 0)
  {
    printf("%d %d\n",node_get_id(ptr->ptr_list->head),node_get_time(ptr->ptr_list->head));	
  }
  else 
    printf("Empty Queue\n");
    
}`,`  if (c == 2) {
  printf("n is a Prime number");
  }
  else {
  printf("n is not a Prime number");
  }`,`if(string[i]=='('|| string[i]=='{' || string[i]=='[')
  {
      Stack_push(&stack,string[i]);
      continue;
  }
  else if(string[i]==')' || string[i]=='}' || string[i]==']')
  {
     if(Stack_is_empty(&stack))
        return 0;
     else if((Stack_peek(&stack)=='(' && string[i]==')') || (Stack_peek(&stack)=='{' && string[i]=='}') || (Stack_peek(&stack)=='[' && string[i]==']'))
        Stack_pop(&stack);        
     else 
       return 0;
    
  }`,`const int Stack_peek(Stack *ptr_Stack) 
  {
    return Node_get_data(ptr_Stack->ptr_list->head);
  }`,`if(Stack_is_empty(&stack))
  return 1;
  else
  return 0;
  Stack_destroy(&stack);','void tree_destroy(Tree *t)
  {
      destroy(t->root);
  }`,`if(tempv==tree->root) 
  {
      while(tempv->right!=NULL) 
      {
          tempv=tempv->right;
      }
      printfun(tempv->data);
  }
  while(tempv->left!=NULL) 
  {
     tempv=inorder_predecessor(tempv);
      printfun(tempv->data);
  }`,`void stack_push(Stack *ptr_stack, int key)
  {
    List_insert_front(ptr_stack->ptr_List,key);
  }`,`void stack_pop(stack *ptr_stack)
  {
      if(ptr_stack->top == -1)
          return;
      ptr_stack->top--;
  }`,`void stack_push(stack *ptr_stack, int key)
  {
      ptr_stack->top++;
      ptr_stack->arr[ptr_stack->top] = key;
  }`,`HashTable *create_table(int size)
  {
      //TODO
      HashTable *h;
      h=(HashTable*)malloc(sizeof(HashTable));
      h->size=size;
      h->table=(int*)malloc(size*sizeof(int));
       for(int i=0;i<h->size;i++){
              h->table[i]=-1;
      }
      return h;
  
  }`,`int search(HashTable *htable, int element)
  {
      //TODO
      for(int i=0;i<htable->size;i++){
          if(htable->table[i]==element){
              return 1;
          }
      }
      return 0;
  }`,`int search(HashTable *htable, int element)
  {
      //TODO
      for(int i=0;i<htable->size;i++){
          if(htable->table[i]==element){
              return 1;
          }
      }
      return 0;
  }`,`void delete (HashTable *htable, int element)
  {
      //TODO
          if(htable->table[i]!=-1&&htable->table[i]==element){
              htable->table[i]=-1;
          }
      }
  }`,`for(int i=len-1 ; i>=0 ; i--)
  {	
   new_node=(struct Node *)malloc(sizeof(struct Node));
   new_node->data=a[i];
   new_node->left=new_node->right=new_node->prev=NULL;
   if(root==NULL)
   {
     root=new_node;
     cur=par=root;
   }`,`case 1:
   /* Insert elements */ 
     scanf("%d", &element);
     if(!heap_insert(my_heap, element))
       printf("OVERFLOW\n");
   break;
   ','case 2:
   /* Print elements in sorted order, and empties the heap. */
   heap_print(my_heap);		
   heap_destruct(my_heap);
   loop = 0;
   break;
  `,`for(int i=0; i<n ; i++)
  {
    if(graph[tempv][i] == 1 && visit[i] == 0)
    {
      if(i == v)
      {
        is_list = 1;
        return is_list;
      }
      else
      {
        en++;
        visit_queue[en] = i;
        visit[i] = 1;
      }
    }`,`	for(int i=0; i<n;i++)
    {
      visit_queue[i] = -1;
      visit[i] = 0;
    }
  `,`void stack_pop(stack *ptr_stack)
  {
      if(ptr_stack->top == -1)
          return;
      ptr_stack->top--;
  }`,`const int Stack_peek(Stack *ptr_Stack) 
  {
    return Node_get_data(ptr_Stack->ptr_list->head);
  }`,`int Prec(char ch) 
  { 
      switch (ch) const int Stack_peek(Stack *ptr_Stack) 
{
	return Node_get_data(ptr_Stack->ptr_list->head);
}
      { 
      case '+': 
      case '-': 
          return 1; 
  
      case '*': 
      case '/': 
          return 2; 
  
      case '^': 
          return 3; 
      } 
      return -1; 
  }`,`void stack_pop(stack *ptr_stack)
  {
      if(ptr_stack->top == -1)
          return;
      ptr_stack->top--;
  }`,`void Stack_destroy(Stack *ptr_Stack)
  {
   list_destroy(ptr_Stack->ptr_list);
 }`,`Node *inorder_predecessor(Node *ptr)
 {
    if(ptr->leftThread!=0) 
    {
        ptr=ptr->left;
        return ptr;
    }
    else 
    {
        return ptr->left;
    }
 }`,`if(data < current->data)
 {
   current->leftThread=1;
   tempv->left=current->left;
   tempv->right=current;
   current->left=tempv;
 }
 else {
   current->rightThread=1;
   tempv->right=current->right;
   tempv->left=current;
   current->right=tempv;
 }`,`void freeTree(Node *root)
 {
    if(root==NULL)
     return;
   freeTree(root->left);
   freeTree(root->right);
   freeTree(root->prev);
   free(root);
 }`,`void postorder(Node *root)
 {
    if(root!=NULL)
    {
     postorder(root->left);
      postorder(root->right);
      printf("%c",root->data);
    } 
 }
 `,`void preorder(Node *root)
 {
   if(root!=NULL)
    {
     printf("%c",root->data);
     preorder(root->left);
     preorder(root->right);
    }
    
 }
 `,`#include<stdio.h>
 main()
 {
 /* variable definition and initialization */   
     char stringArray[100];
     printf("Please write something: \n");
     scanf("%s", stringArray);  
     printf("You enter the string %s\n", stringArray);
     return 0; 
 }`,`void queue_peek(Queue *ptr)
 {
   if (queue_is_empty(ptr) == 0)
   {
     printf("%d %d\n",node_get_id(ptr->ptr_list->head),node_get_time(ptr->ptr_list->head));	
   }
   else 
     printf("Empty Queue\n");
     
 }
 `,`int stack_is_empty(stack *ptr_stack)
 {
     if(ptr_stack->top == -1)
         return 1;
     return 0;
 }`], // add stuff here it wont take long
  cpplang: [`int main() {
    cout << "Hello World!";
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    cout << "Hello World!";
    cout << "I am learning C++";
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    cout << "Hello World!" << endl;
    cout << "I am learning C++";
    return 0;
  }`,`int myNum = 15;  // myNum is 15
  myNum = 10;  // Now myNum is 10
  cout << myNum;  // Outputs 10','int main() {
    int x = 5, y = 6, z = 50;  
    cout << x + y + z;
    return 0;
  }`,`int main() {
    // Good name
    int minutesPerHour = 60;
    // OK, but not so easy to understand what m actually is
    int m = 60;
    cout << minutesPerHour << "\n";
    cout << m;
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    const int myNum = 15;
    myNum = 10;
    cout << myNum;
    return 0;
  }`,`int main() {
    int x;
    cout << "Type a number: "; // Type a number and press enter
    cin >> x; // Get user input from the keyboard
    cout << "Your number is: " << x;
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main () {
    int myNum = 1000;
    cout << myNum;
    return 0;
  }`,`int main () {
    float myNum = 5.75;
    cout << myNum;
    return 0;
  }`,`int main () {
    double myNum = 19.99;
    cout << myNum;
    return 0;
  }
  `,`int main () {
    float f1 = 35e3;
    double d1 = 12E4;
    cout << f1 << "\n";
    cout << d1;
    return 0;
  }`,`int main() {
    bool isCodingFun = true;
    bool isFishTasty = false;
    cout << isCodingFun << "\n";
    cout << isFishTasty;
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main () {
    char myGrade = 'B';
    cout << myGrade;
    return 0;
  }`,`int main () {
    char a = 65, b = 66, c = 67;
    cout << a;
    cout << b;
    cout << c;
    return 0;
  }
  `,`int main () {
    char a = 65, b = 66, c = 67;
    cout << a;
    cout << b;
    cout << c;
    return 0;
  }
  `,`#include <iostream>
  using namespace std;
  int main() {
    int x = 100 + 50;
    cout << x;
    return 0;
  }`,`int main() {
    int sum1 = 100 + 50;        // 150 (100 + 50)
    int sum2 = sum1 + 250;      // 400 (150 + 250)
    int sum3 = sum2 + sum2;     // 800 (400 + 400)
    cout << sum1 << "\n";
    cout << sum2 << "\n";
    cout << sum3;
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    int x = 10;
    cout << x;
    return 0;
  }
  `,`#include <iostream>
  using namespace std;
  int main() {
    int x = 5;
    x >>= 3;
    cout << x;
    return 0;
  }
  `,`#include <iostream>
  using namespace std;
  int main() {
    int x = 5;
    x &= 3;
    cout << x;
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    int x = 5;
    x |= 3;
    cout << x;
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    int x = 5;
    int y = 3;
    cout << (x >= y); // returns 1 (true) because five is greater than, or equal, to 3
    return 0;
  }`,`int main() {
    int x = 5;
    int y = 3;
    cout << (x > 3 && x < 10); // returns true (1) because 5 is greater than 3 AND 5 is less than 10
    return 0;
  }
  `,`int main() {
    int x = 5;
    int y = 3;
    cout << (x > 3 || x < 4); // returns true (1) because one of the conditions are true (5 is greater than 3, but 5 is not less than 4)
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    int x = 5;
    int y = 3;
    cout << (!(x > 3 && x < 10)); // returns false (0) because ! (not) is used to reverse the result
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    cout << min(5, 10);
    return 0;
  }`,`#include <iostream>
  #include <cmath>
  using namespace std;
  int main() {
    cout << sqrt(64) << "\n";
    cout << round(2.6) << "\n";
    cout << log(2) << "\n";
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    bool isCodingFun = true;
    bool isFishTasty = false;
    cout << isCodingFun << "\n";
    cout << isFishTasty;
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    int x = 10;
    int y = 9;
    cout << (x > y);
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    int x = 20;
    int y = 18;
    if (x > y) {
      cout << "x is greater than y";
    }  
    return 0;
  }`,`int main() {
    int time = 22;
    if (time < 10) {
      cout << "Good morning.";
    } else if (time < 20) {
      cout << "Good day.";
    } else {
      cout << "Good evening.";
    }
    return 0;
  }`,`#include <iostream>
  #include <string>
  using namespace std;
  int main() {
    int time = 20;
    string result = (time < 18) ? "Good day." : "Good evening.";
    cout << result;
    return 0;
  }`,`int main() {
    int day = 4;
    switch (day) {
      case 6:
        cout << "Today is Saturday";
        break;
      case 7:
        cout << "Today is Sunday";
        break;
      default:
        cout << "Looking forward to the Weekend";
    }
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    int i = 0;
    while (i < 5) {
      cout << i << "\n";
      i++;
    }
    return 0;
  }`,`int main() {
    int x;
    cout << "Type a number: "; // Type a number and press enter
    cin >> x; // Get user input from the keyboard
    cout << "Your number is: " << x;
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    int x = 5, y = 6, z = 50;  
    cout << x + y + z;
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    cout << "Hello World!" << endl;
    cout << "I am learning C++";
    return 0;
  }`,`int main() {
    cout << "Hello World!";
    return 0;
  }','int main () {
    char a = 65, b = 66, c = 67;
    cout << a;
    cout << b;
    cout << c;
    return 0;
  }
  `,`#include <iostream>
  using namespace std;
  int main() {
    bool isCodingFun = true;
    bool isFishTasty = false;
    cout << isCodingFun << "\n";
    cout << isFishTasty;
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    int i = 0;
    do {
      cout << i << "\n";
      i++;
    }
    while (i < 5);
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    for (int i = 0; i < 5; i++) {
      cout << i << "\n";
    }
    return 0;
  }`,`#include <iostream>
  using namespace std;
  int main() {
    for (int i = 0; i < 10; i++) {
      if (i == 4) {
        continue;
      }
      cout << i << "\n";
    }   
    return 0;
  }`,`int main() {
    int i = 0;
    while (i < 10) {
      cout << i << "\n";
      i++;
      if (i == 4) {
        break;
      }
    } 
    return 0;
  }`,`#include <iostream>
  #include <string>
  using namespace std;
  int main() {
    string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
    cars[0] = "Opel";
    cout << cars[0];
    return 0;
  }`,`#include <iostream>
  #include <string>
  using namespace std;
  int main() {
    string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
    for(int i = 0; i < 4; i++) {
      cout << i << ": " << cars[i] << "\n";
    }
    return 0;
  }`,`int main() {
    string food = "Pizza";
    string &meal = food;
    cout << food << "\n";
    cout << meal << "\n";
    return 0;
  }`,`#include <iostream>
  #include <string>
  using namespace std;
  
  int main() {
    string food = "Pizza";
    cout << &food;
    return 0;
  }
  `,`int main() {
    string food = "Pizza";  // Variable declaration
    string* ptr = &food;    // Pointer declaration
    // Reference: Output the memory address of food with the pointer
    cout << ptr << "\n";
    // Dereference: Output the value of food with the pointer
    cout << *ptr << "\n";
    return 0;
  }
  `],
  pythonlang: [`x = 5
  print(type(x)) `,`x = dict(name="John", age=36)
  #display x:
  print(x)
  #display the data type of x:
  print(type(x)) 
  `,`x = bytes(5)
  #display x:
  print(x)
  #display the data type of x:
  print(type(x))`,`x = frozenset(("apple", "banana", "cherry"))
  #display x:
  print(x)
  #display the data type of x:
  print(type(x)`,`x = memoryview(bytes(5))
  #display x:
  print(x)
  #display the data type of x:
  print(type(x)) 
  `,` x =1
  y = 2.8
  z = 1j
  print(type(x))
  print(type(y))
  print(type(z))`,`thistuple = ("apple", "banana", "cherry")
  print(thistuple)','thistuple = ("apple",)
  print(type(thistuple))
  #NOT a tuple
  thistuple = ("apple")
  print(type(thistuple))`,`thisdict =	{
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
  }
  print(thisdict)`,`thisdict = {
    "brand": "Ford",
    "electric": False,
    "year": 1964,
    "colors": ["red", "white", "blue"]
  }
  print(thisdict)`,`myfamily = {
    "child1" : {
      "name" : "Emil",
      "year" : 2004
    },
    "child2" : {
      "name" : "Tobias",
      "year" : 2007
    },
    "child3" : {
      "name" : "Linus",
      "year" : 2011
    }
  }
  print(myfamily)`,`a = 33
  b = 200
  if b > a:
  print("b is greater than a")`,`a = 200
  b = 33
  if b > a:
    print("b is greater than a")
  elif a == b:
    print("a and b are equal")
  else:
    print("a is greater than b")`,`i = 1
    while i < 6:
      print(i)
      i += 1
    else:
      print("i is no longer less than 6")','fruits = ["apple", "banana", "cherry"]
      for x in fruits:
        print(x) 
        if x == "banana":
          break`,`fruits = ["apple", "banana", "cherry"]
          for x in fruits:
            if x == "banana":
              continue
            print(x)`,`adj = ["red", "big", "tasty"]
            fruits = ["apple", "banana", "cherry"]   
            for x in adj:
              for y in fruits:
                print(x, y)`,`def my_function():
                print("Hello from a function")
              my_function()`,`print(fname + " " + lname)
              my_function("Emil", "Refsnes")`,`def my_function(country = "Norway"):
              print("I am from " + country;
            my_function("Sweden")
            my_function("India")
            my_function()
            my_function("Brazil")`,`def myfunc(n):
            return lambda a : a * n
          mytripler = myfunc(3)
          print(mytripler(11))`,`class Person:
          def __init__(self, fname, lname):
            self.firstname = fname
            self.lastname = lname
          def printname(self):
            print(self.firstname, self.lastname)
        #Use the Person class to create an object, and then execute the printname method:
        x = Person("John", "Doe")
        x.printname()`,`import mymodule
        a = mymodule.person1["age"]
        print(a)`,`import datetime
        x = datetime.datetime.now()
        print(x)`,`x = min(5, 10, 25)
        y = max(5, 10, 25)
        print(x)
        print(y)`,`x = min(5, 10, 25)
        y = max(5, 10, 25)
        print(x)
        print(y)`,`import math
        x = math.ceil(1.4)
        y = math.floor(1.4)
        print(x) # returns 2
        print(y) # returns 1`,`import re
        txt = "The rain in Spain"
        x = re.search("^The.*Spain$", txt)`,`import json
        # some JSON:
        x =  '{ "name":"John", "age":30, "city":"New York"}'
        # parse x:
        y = json.loads(x)
        # the result is a Python dictionary:
        print(y["age"])`,`try:
        print(x)
      except NameError:
        print("Variable x is not defined")
      except:
        print("Something else went wrong")`,`username = raw_input("Enter username:")
        print("Username is: " + username`,`f = open("demofile.txt", "r")
        print(f.read())`,`f = open("demofile2.txt", "a")
        f.write("Now the file has more content!")
        f.close()
        #open and read the file after the appending:
        f = open("demofile2.txt", "r")
        print(f.read())`,`import os
        os.remove("demofile.txt")','import os
        if os.path.exists("demofile.txt"):
          os.remove("demofile.txt")
        else:
          print("The file does not exist")`,`import numpy
          arr = numpy.array([1, 2, 3, 4, 5])
          print(arr)`,`import numpy as np
          arr = np.array([1, 2, 3, 4])
          print(arr.dtype)`,`import numpy as np
          arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
          print(arr.shape)`,`import numpy as np
          arr = np.array([[1, 2, 3], [4, 5, 6]])
          for x in arr:
            print(x)`,`import numpy as np
            arr = np.array([41, 42, 43, 44])
            x = [True, False, True, False]
            newarr = arr[x]
            print(newarr)`,`import numpy as np
            arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
            newarr = arr.reshape(2, 3, 2)
            print(newarr)`,`import numpy as np
            arr = np.array([1, 2, 3, 4, 5])
            x = arr.view()
            x[0] = 31
            print(arr)
            print(x)`,`import numpy as np
            arr = np.array([1, 2, 3, 4])
            print(arr[2] + arr[3])`,`import numpy as np
            arr1 = np.array([1, 2, 3])
            arr2 = np.array([4, 5, 6])
            arr = np.concatenate((arr1, arr2))
            print(arr)`,`from numpy import random
            import numpy as np
            arr = np.array([1, 2, 3, 4, 5])
            random.shuffle(arr)
            print(arr)`,`from numpy import random
            x = random.normal(size=(2, 3))
            print(x)`,`from numpy import random
            x = random.normal(loc=1, scale=2, size=(2, 3))
            print(x)`,`from numpy import random
            import matplotlib.pyplot as plt
            import seaborn as sns
            sns.distplot(random.uniform(size=1000), hist=False)
            plt.show()`,`from numpy import random
            x = random.multinomial(n=6, pvals=[1/6, 1/6, 1/6, 1/6, 1/6, 1/6])
            print(x)`,`import numpy as np
            arr = np.array([True, False, True])
            print(np.sort(arr))`],
};


let index_java = Math.floor(Math.random() * lang.javalang.length);
let index_c = Math.floor(Math.random() * lang.clang.length);
let index_cpp = Math.floor(Math.random() * lang.cpplang.length);
let index_python = Math.floor(Math.random() * lang.pythonlang.length);

var snippet =  {
  java : lang.javalang[index_java],
  c : lang.clang[index_c],
  cpp : lang.cpplang[index_cpp],
  python : lang.pythonlang[index_python],
  english : lang.english,
};

export default snippet;
