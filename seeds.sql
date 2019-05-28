DELETE FROM Users WHERE id IN (1,2,3);
INSERT INTO Users
    (id, name, email ,password, createdAt, updatedAt)
VALUES
    (1, 'Mathew', "mathew@hotmail.com", "mathew123", NOW(), NOW());
INSERT INTO Users
    (id, name, email ,password, createdAt, updatedAt)
VALUES
    (2, 'Sara', "saraM@hotmail.com", "sara987", NOW(), NOW());
INSERT INTO Users
    (id, name, email ,password, createdAt, updatedAt)
VALUES
    (3, 'Mike', "kitty@gmail.com", "kitty654", NOW(), NOW());


INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('grocery', 400, NOW(), NOW(), 1);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('utilities', 30, NOW(), NOW(), 1);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('restaurant', 50, NOW(), NOW(), 1);