public class LectureMaterial {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = input.nextInt();
        timestable(number);
    }
    public static void timestable(int number){
        for(int i = 1; i< 13; i++) {
            System.out.print(number * i + ",");
        }

    }
}
