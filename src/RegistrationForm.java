import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;

public class RegistrationForm extends JFrame implements ActionListener {
    JLabel labelName, labelMobile, labelGender, labelDOB, labelAddress;
    JTextField textName, textMobile, textDOB, textAddress;
    JRadioButton male, female;
    JButton submit, reset;
    ButtonGroup genderGroup;

    public RegistrationForm() {
        // Set up the frame
        setTitle("Registration Form");
        setSize(400, 400);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Initialize components
        labelName = new JLabel("Name:");
        labelName.setBounds(20, 30, 100, 30);
        textName = new JTextField();
        textName.setBounds(130, 30, 200, 30);

        labelMobile = new JLabel("Mobile:");
        labelMobile.setBounds(20, 70, 100, 30);
        textMobile = new JTextField();
        textMobile.setBounds(130, 70, 200, 30);

        labelGender = new JLabel("Gender:");
        labelGender.setBounds(20, 110, 100, 30);
        male = new JRadioButton("Male");
        male.setBounds(130, 110, 70, 30);
        female = new JRadioButton("Female");
        female.setBounds(200, 110, 70, 30);
        genderGroup = new ButtonGroup();
        genderGroup.add(male);
        genderGroup.add(female);

        labelDOB = new JLabel("DOB:");
        labelDOB.setBounds(20, 150, 100, 30);
        textDOB = new JTextField();
        textDOB.setBounds(130, 150, 200, 30);

        labelAddress = new JLabel("Address:");
        labelAddress.setBounds(20, 190, 100, 30);
        textAddress = new JTextField();
        textAddress.setBounds(130, 190, 200, 30);

        submit = new JButton("Submit");
        submit.setBounds(50, 250, 100, 30);
        reset = new JButton("Reset");
        reset.setBounds(200, 250, 100, 30);

        // Add action listeners
        submit.addActionListener(this);
        reset.addActionListener(this);

        // Add components to frame
        add(labelName);
        add(textName);
        add(labelMobile);
        add(textMobile);
        add(labelGender);
        add(male);
        add(female);
        add(labelDOB);
        add(textDOB);
        add(labelAddress);
        add(textAddress);
        add(submit);
        add(reset);

        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == submit) {
            // Get data from form
            String name = textName.getText();
            String mobile = textMobile.getText();
            String gender = male.isSelected() ? "Male" : "Female";
            String dob = textDOB.getText();
            String address = textAddress.getText();

            // Save data to database
            try {
                Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/registrationDB", "root", "password");
                String query = "INSERT INTO users (name, mobile, gender, dob, address) VALUES (?, ?, ?, ?, ?)";
                PreparedStatement pst = con.prepareStatement(query);
                pst.setString(1, name);
                pst.setString(2, mobile);
                pst.setString(3, gender);
                pst.setString(4, dob);
                pst.setString(5, address);
                pst.executeUpdate();
                JOptionPane.showMessageDialog(null, "Data Saved Successfully");
                con.close();
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(null, ex.getMessage());
            }
        } else if (e.getSource() == reset) {
            // Reset form fields
            textName.setText("");
            textMobile.setText("");
            genderGroup.clearSelection();
            textDOB.setText("");
            textAddress.setText("");
        }
    }

    public static void main(String[] args) {
        new RegistrationForm();
    }
}