import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterTeacherAddFK1639505003747 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "teachers",
      new TableColumn({
        name: "class_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "teachers",
      new TableForeignKey({
        name: "FK_teacher_class",
        referencedTableName: "classes",
        referencedColumnNames: ["id"],
        columnNames: ["class_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("teachers", "class_id");
  }
}
